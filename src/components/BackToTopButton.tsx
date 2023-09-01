'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  const onClick = () => {
    window.scrollTo(0, 0);
  };

  const onScroll = () => {
    if (window.scrollY > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div
      className="fixed bottom-[20px] right-[20px] flex items-center justify-center w-[50px] h-[50px] border-accentGreen border-[1px] rounded-full cursor-pointer z-30 backdrop-blur-[25px] overflow:hidden"
      onClick={onClick}
    >
      <Image src="/green-arrow-top.svg" alt="" width={14} height={14} />
    </div>
  );
};

export default BackToTopButton;
