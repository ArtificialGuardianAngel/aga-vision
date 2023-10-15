'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-[20px] left-[50%] translate-x-[-50%] p-[0_10px] bg-white/10 z-[100] flex rounded-[50px] text-[13px] font-[600] whitespace-nowrap uppercase text-white leading-[7px] items-center transition-colors md:hidden backdrop-blur-[25px] max-w-[90%] overflow-auto scrollbar-hide">
      <div className="p-[20px_30px]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={pathname !== '' ? '/#about' : '#about'}
        >
          About
        </Link>
      </div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={pathname !== '' ? '/#blueprint' : '#blueprint'}
        >
          Blueprint
        </Link>
      </div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={pathname !== '' ? '/#training-camp' : '#training-camp'}
        >
          AI Dev Training camp
        </Link>
      </div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={pathname !== '' ? '/#challenges' : '#challenges'}
        >
          Challenges
        </Link>
      </div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={'/hackathons'}
        >
          Hackathons
        </Link>
      </div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={'/contractor'}
        >
          Contractor
        </Link>
      </div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={'/universe'}
        >
          Universe
        </Link>
      </div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={'https://discord.gg/th5AvSAz79'}
          target="_blank"
        >
          Discord
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
