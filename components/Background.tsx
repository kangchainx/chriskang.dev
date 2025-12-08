import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {/* Blob 1 - Purple/Blueish */}
      <div className="absolute top-0 left-[-10%] w-96 h-96 bg-purple-200 dark:bg-purple-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob"></div>
      
      {/* Blob 2 - Cyan/Tealish */}
      <div className="absolute top-0 right-[-10%] w-96 h-96 bg-cyan-200 dark:bg-cyan-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob delay-2000"></div>
      
      {/* Blob 3 - Pinkish */}
      <div className="absolute -bottom-32 left-[20%] w-96 h-96 bg-pink-200 dark:bg-pink-900/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-30 animate-blob delay-4000"></div>
      
      {/* Noise Texture Overlay (Optional, for texture) */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]" style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}></div>
    </div>
  );
};