'use client';

import React, { useState } from 'react';
import cn from 'classnames';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const MobileMenu: React.FC<{}> = () => {
  const [opened, setOpened] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div
        className={cn(
          'fixed w-[50px] h-[50px] rounded-full border-accentGreen top-[20px] right-[20px] z-50 border-2 hidden md:block',
        )}
        onClick={() => setOpened((p) => !p)}
      >
        <div
          className={cn(
            'w-[16px] h-[2px] rounded-[2px] bg-accentGreen absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[calc(-50%-5px)] transition-all',
            {
              ['translate-y-[0] rotate-45']: opened,
            },
          )}
        ></div>
        <div
          className={cn(
            'w-[16px] h-[2px] rounded-[2px] bg-accentGreen absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] transition-all',
            { hidden: opened },
          )}
        ></div>
        <div
          className={cn(
            'w-[16px] h-[2px] rounded-[2px] bg-accentGreen absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[calc(-50%+5px)] transition-all',
            {
              ['translate-y-[0] -rotate-45']: opened,
            },
          )}
        ></div>
      </div>
      <div
        className={cn(
          'fixed top-0 left-0 w-screen h-[100dvh] z-40 flex items-center justify-center translate-x-full transition-all',
          { 'translate-x-0': opened },
        )}
        style={{
          background:
            'radial-gradient(150.31% 94.37% at 60.52% 17.97%, rgba(191, 60, 189, 0.20) 0%, rgba(29, 42, 161, 0.20) 46.88%, rgba(28, 41, 60, 0.20) 100%), linear-gradient(0deg, #1C293C 0%, #1C293C 100%), #FFF',
        }}
      >
        <div className="flex flex-col gap-[5px] p-[0_20px] text-center w-full text-[18px]">
          <div className="bg-card rounded-[50px] p-[20px_30px]">
            <Link
              className="transition-colors hover:text-accentGreen"
              href={pathname !== '' ? '/#about' : '#about'}
              onClick={() => setOpened(false)}
            >
              About
            </Link>
          </div>
          <div className="bg-card rounded-[50px] p-[20px_30px]">
            <Link
              className="transition-colors hover:text-accentGreen"
              href={pathname !== '' ? '/#blueprint' : '#blueprint'}
              onClick={() => setOpened(false)}
            >
              Blueprint
            </Link>
          </div>
          <div className="bg-card rounded-[50px] p-[20px_30px]">
            <Link
              className="transition-colors hover:text-accentGreen"
              href={pathname !== '' ? '/#training-camp' : '#training-camp'}
              onClick={() => setOpened(false)}
            >
              AI Dev Training camp
            </Link>
          </div>
          <div className="bg-card rounded-[50px] p-[20px_30px]">
            <Link
              className="transition-colors hover:text-accentGreen"
              href={pathname !== '' ? '/#challenges' : '#challenges'}
              onClick={() => setOpened(false)}
            >
              Challenges
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;
