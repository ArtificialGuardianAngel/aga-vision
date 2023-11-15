'use client';

import { useEffect, useRef } from 'react';

const HackathonsWelcomeBlock = () => {
  const desktopVideoRef = useRef<HTMLVideoElement>(null);
  const mobileVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (desktopVideoRef.current) {
        desktopVideoRef.current.play();
      }

      if (mobileVideoRef.current) {
        mobileVideoRef.current.play();
      }
    }, 0);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-end gradient">
      <video
        className="absolute object-cover top-0 left-0 w-full h-full -z-10 block lg:hidden"
        preload="true"
        ref={desktopVideoRef}
        loop
        muted
        playsInline
      >
        <source src="/hackathons-bg.mp4" />
      </video>
      <video
        className="absolute object-cover top-0 left-0 w-full h-full -z-10 hidden lg:block"
        preload="true"
        ref={mobileVideoRef}
        loop
        muted
        playsInline
      >
        <source src="/hackathons-mobile-bg.mp4" />
      </video>
      <div className="hackathons-bg-fade absolute top-0 left-0 w-full h-full -z-10"></div>

      <div className="p-[70px_10px] flex flex-col gap-[50px] w-full max-w-[650px] items-center">
        <div className="title-block">AGA Hackathons</div>

        <div className="text-center font-[700] tracking-[5px] uppercase text-accentGreen">
          Unleashing Angelic Power Through Code
        </div>
      </div>
    </div>
  );
};

export default HackathonsWelcomeBlock;
