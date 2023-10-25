'use client';

import { useEffect, useRef } from 'react';

const ContractorWelcomeBlock = () => {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-end gradient">
      <video
        className="absolute object-cover top-0 left-0 w-full h-full -z-10"
        preload="true"
        loop
        muted
        playsInline
        ref={videoRef}
      >
        <source src="/contractor-bg.mp4" />
      </video>
      <div className="hackathons-bg-fade absolute top-0 left-0 w-full h-full -z-10"></div>

      <div className="p-[70px_10px] flex flex-col gap-[50px] w-full max-w-[650px] items-center">
        <div className="title-block">Contractor</div>

        <div className="text-center font-[700] tracking-[5px] uppercase text-accentGreen">
          AI RONIN: The Rogue AI Contractor
        </div>
      </div>
    </div>
  );
};

export default ContractorWelcomeBlock;
