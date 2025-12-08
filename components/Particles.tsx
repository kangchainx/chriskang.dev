'use client';

import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
}

export const Particles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: 0, y: 0, active: false });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = window.innerWidth;
    let height = window.innerHeight;

    // Configuration
    const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100); // Responsive count
    const connectionDistance = 150;
    const mouseDistance = 200; // Distance to connect to mouse
    const moveSpeed = 0.5;

    const init = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;

      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * moveSpeed,
          vy: (Math.random() - 0.5) * moveSpeed,
        });
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      // Check for dark mode to adjust color
      const isDark = document.documentElement.classList.contains('dark');
      const color = isDark ? '255, 255, 255' : '0, 0, 0';
      const opacityBase = isDark ? 0.2 : 0.15;

      // Update and Draw Particles
      particles.forEach((p, i) => {
        // Move
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off edges
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw Dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color}, ${opacityBase})`;
        ctx.fill();

        // Connect to Mouse
        if (mouseRef.current.active) {
            const dx = p.x - mouseRef.current.x;
            const dy = p.y - mouseRef.current.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < mouseDistance) {
                ctx.beginPath();
                ctx.strokeStyle = `rgba(${color}, ${opacityBase * 1.5 * (1 - distance / mouseDistance)})`; // Slightly stronger line
                ctx.lineWidth = 1;
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
                ctx.stroke();
            }
        }

        // Draw Connections between particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${color}, ${opacityBase * (1 - distance / connectionDistance)})`;
            ctx.lineWidth = 1;
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    const handleResize = () => {
      init();
    };

    const handleMouseMove = (e: MouseEvent) => {
        mouseRef.current.x = e.clientX;
        mouseRef.current.y = e.clientY;
        mouseRef.current.active = true;
    };

    const handleMouseLeave = () => {
        mouseRef.current.active = false;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave); // Detect leaving the window

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[1] pointer-events-none"
    />
  );
};
