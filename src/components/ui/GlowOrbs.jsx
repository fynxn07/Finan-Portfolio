import React from 'react';

const GlowOrbs = ({ tone = 'dark' }) => {
  const opacityClass = tone === 'light' ? 'opacity-[0.06]' : 'opacity-70';

  return (
    <div
      className="pointer-events-none absolute inset-0 overflow-hidden"
      aria-hidden="true"
    >
      <div
        className={`animate-float-a absolute top-10 -left-32 w-[420px] h-[420px] rounded-full bg-[#ff2a2a] blur-[110px] ${opacityClass}`}
      />

      <div
        className={`animate-float-b absolute bottom-0 -right-32 w-[380px] h-[380px] rounded-full bg-[#ff2a2a] blur-[110px] ${opacityClass}`}
      />
    </div>
  );
};

export default GlowOrbs;