'use client';

import { useEffect, useRef } from 'react';
import Button from '../Button';

const HackathonWelcomeBlock = () => {
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
    <div className="min-h-screen flex flex-col items-center justify-between gradient p-[30px_50px_50px] font-ceraPro">
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

      <h4 className="text-[18px] font-[900] uppercase text-white">
        aga Hackathon 3.0
      </h4>

      <div className="flex flex-col gap-[30px] items-center max-w-[760px]">
        <h1 className="text-[90px] text-white font-[900] text-center leading-[calc(80/90)] uppercase md:text-[50px] md:leading-[50px]">
          [AGI] Discovery Hackathon
        </h1>

        <div className="h-[1px] bg-white w-[200px]"></div>

        <div className="text-center text-[18px] max-w-[500px] font-[500] md:text-[15px]">
          Welcome to the Next Chapter in Advanced General Intelligence (AGI)
          Development!
        </div>

        <Button
          className="md:w-full"
          size="lg"
          linkType="internal"
          link="#form"
        >
          Join hackathon
        </Button>
      </div>
    </div>
  );
};

export default HackathonWelcomeBlock;
