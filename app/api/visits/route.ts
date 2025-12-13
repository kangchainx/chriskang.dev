import { Redis } from '@upstash/redis';
import { NextRequest, NextResponse } from 'next/server';

export const runtime = 'edge';

const redis = Redis.fromEnv();

const DEDUPE_WINDOW_SECONDS = 60 * 5;
const DAILY_TTL_SECONDS = 60 * 60 * 48;
const TIME_ZONE = 'Asia/Shanghai';

const getDateKey = () =>
  new Intl.DateTimeFormat('en-CA', {
    timeZone: TIME_ZONE,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date());

const getClientIp = (request: NextRequest) => {
  const xff = request.headers.get('x-forwarded-for');
  if (xff) return xff.split(',')[0]?.trim() || 'unknown';

  const realIp = request.headers.get('x-real-ip');
  if (realIp) return realIp;

  const vercelIp = request.headers.get('x-vercel-forwarded-for');
  if (vercelIp) return vercelIp.split(',')[0]?.trim() || 'unknown';

  return 'unknown';
};

const hashString = async (value: string) => {
  const encoded = new TextEncoder().encode(value);
  const digest = await crypto.subtle.digest('SHA-256', encoded);
  return Array.from(new Uint8Array(digest))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 16);
};

const json = (data: unknown, status = 200) =>
  NextResponse.json(data, {
    status,
    headers: {
      'Cache-Control': 'no-store',
    },
  });

export async function POST(request: NextRequest) {
  const today = getDateKey();
  const ip = getClientIp(request);
  const ipHash = await hashString(ip);

  const totalKey = 'visits:total';
  const todayKey = `visits:daily:${today}`;
  const dedupeKey = `visits:dedupe:${today}:${ipHash}`;

  const allowed = await redis.set(dedupeKey, '1', {
    nx: true,
    ex: DEDUPE_WINDOW_SECONDS,
  });

  if (allowed) {
    const [total, todayCount] = await Promise.all([
      redis.incr(totalKey),
      redis.incr(todayKey),
    ]);
    await redis.expire(todayKey, DAILY_TTL_SECONDS);
    return json({ total, today: todayCount, counted: true });
  }

  const [total, todayCount] = await redis.mget<[number | null, number | null]>(
    totalKey,
    todayKey,
  );
  return json({ total: total ?? 0, today: todayCount ?? 0, counted: false });
}

export async function GET() {
  const today = getDateKey();
  const totalKey = 'visits:total';
  const todayKey = `visits:daily:${today}`;

  const [total, todayCount] = await redis.mget<[number | null, number | null]>(
    totalKey,
    todayKey,
  );
  return json({ total: total ?? 0, today: todayCount ?? 0, counted: false });
}
