import React from 'react';

// change hidden to flex
const Navbar = () => {
  return (
    <nav className="absolute top-[20px] left-[50%] translate-x-[-50%] p-[0_10px] bg-white/10 z-[100] hidden rounded-[50px] text-[13px] font-[600] whitespace-nowrap uppercase text-white leading-[7px] items-center">
      <div className="p-[20px_30px]">ABOUT</div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">Blueprint</div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">AI Dev Training camp</div>
      <div className="h-[30px] w-[1px] bg-white/20"></div>
      <div className="p-[20px_30px]">Challenges</div>
    </nav>
  );
};

export default Navbar;
