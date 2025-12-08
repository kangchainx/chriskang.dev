'use client';

import React, { useEffect, useRef } from 'react';

export const CursorFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef({ x: 0, y: 0 });
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    // Initialize position off-screen or center
    cursorRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    mouseRef.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    let animationFrameId: number;

    const animate = () => {
      // Linear interpolation (Lerp) for smooth lag effect
      // Factor 0.1 determines the speed (lower = slower/more lag)
      const ease = 0.1;
      
      cursorRef.current.x += (mouseRef.current.x - cursorRef.current.x) * ease;
      cursorRef.current.y += (mouseRef.current.y - cursorRef.current.y) * ease;

      if (followerRef.current) {
        followerRef.current.style.transform = `translate3d(${cursorRef.current.x}px, ${cursorRef.current.y}px, 0) translate(-50%, -50%)`;
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <>
      {/* Primary Glow */}
      <div 
        ref={followerRef}
        className="pointer-events-none fixed top-0 left-0 z-[0] h-[400px] w-[400px] rounded-full bg-primary/10 blur-[80px] opacity-0 transition-opacity duration-500 md:opacity-100 will-change-transform"
        aria-hidden="true"
      />
    </>
  );
};
