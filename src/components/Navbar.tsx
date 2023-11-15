'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import cn from 'classnames';

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="fixed top-[20px] left-[50%] translate-x-[-50%] p-[0_25px] bg-white/10 z-[100] flex rounded-[50px] text-[13px] font-[600] whitespace-nowrap uppercase text-white leading-[7px] items-center transition-colors lg:hidden backdrop-blur-[25px] gap-[20px]">
      <div className="p-[20px_0]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={pathname !== '' ? '/#about' : '#about'}
        >
          About
        </Link>
      </div>
      <div className="p-[20px_0]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={pathname !== '' ? '/#blueprint' : '#blueprint'}
        >
          Blueprint
        </Link>
      </div>
      <div className="p-[20px_0]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={pathname !== '' ? '/#training-camp' : '#training-camp'}
        >
          AI Dev camp
        </Link>
      </div>
      <div className="p-[20px_0]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={pathname !== '' ? '/#challenges' : '#challenges'}
        >
          Challenges
        </Link>
      </div>
      <div className="p-[20px_0]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={'/hackathons'}
        >
          Hackathons
        </Link>
      </div>
      <div className="p-[20px_0]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={'/contractor'}
        >
          Contractor
        </Link>
      </div>
      <div className="p-[20px_0]">
        <Link
          className="transition-colors hover:text-accentGreen"
          href={'/universe'}
        >
          Universe
        </Link>
      </div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_0]">
        <Link
          className="transition-colors hover:text-accentGreen block w-[20px] h-[15px] group"
          href={'https://discord.gg/th5AvSAz79'}
          target="_blank"
        >
          <svg
            className="w-[20px] h-[15px]"
            width="40"
            height="32"
            viewBox="0 0 40 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="Vector"
              d="M33.8879 3.38511C31.2453 2.1582 28.4769 1.3088 25.6456 0.836914C25.2681 1.52902 24.8906 2.25258 24.576 2.97614C21.5559 2.50425 18.4414 2.50425 15.4213 2.97614C15.1067 2.25258 14.7607 1.52902 14.3517 0.836914C11.4889 1.3088 8.7205 2.18966 6.10938 3.38511C0.887148 11.1241 -0.528518 18.6428 0.163586 26.0672C3.21513 28.3323 6.64419 30.0311 10.2935 31.1636C11.1114 30.0626 11.835 28.8986 12.4642 27.6717C11.2687 27.2312 10.1362 26.6964 9.0351 26.0358C9.31823 25.8156 9.60136 25.6268 9.88449 25.4066C16.3022 28.4267 23.7266 28.4267 30.1128 25.4066C30.3959 25.6268 30.6791 25.847 30.9622 26.0358C29.8611 26.665 28.7286 27.2312 27.5331 27.6717C28.1623 28.8986 28.8859 30.0626 29.7038 31.1636C33.3531 30.0626 36.7822 28.3323 39.8337 26.0987C40.6516 17.4474 38.418 9.99156 33.8879 3.38511ZM13.345 21.5056C11.3945 21.5056 9.75866 19.7125 9.75866 17.5103C9.75866 15.3082 11.3316 13.515 13.345 13.515C15.3584 13.515 16.9943 15.3082 16.9628 17.5103C16.9314 19.7125 15.3584 21.5056 13.345 21.5056ZM26.6523 21.5056C24.6703 21.5056 23.0659 19.7125 23.0659 17.5103C23.0659 15.3082 24.6389 13.515 26.6523 13.515C28.6657 13.515 30.2701 15.3082 30.2386 17.5103C30.2072 19.7125 28.6657 21.5056 26.6523 21.5056Z"
              className="fill-[#FFFFFF] group-hover:fill-[#11F4D1] transition-all"
            />
          </svg>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
