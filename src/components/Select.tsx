'use client';

import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';
import cn from 'classnames';
import classNames from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';

interface Props {
  placeholder: string;
  options: string[] | readonly string[];
  value?: string;
  onChange?: (value: string) => void;
  className?: string;
}

const Select: React.FC<Props> = ({
  placeholder,
  options,
  value,
  onChange,
  className,
}) => {
  const [opened, setOpened] = useState(false);
  const ref = useRef(null);

  const openDropdown = () => {
    setOpened(true);
  };

  const closeDropdown = () => {
    setOpened(false);
  };

  const toggleDropdown = () => {
    if (opened) {
      closeDropdown();
    } else {
      openDropdown();
    }
  };

  const onSelect = (value: string) => {
    onChange && onChange(value);
    closeDropdown();
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    console.log('keydown');
    if (opened) {
      console.log(e.key);
    }
  };

  useOnClickOutside(ref, closeDropdown);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className={cn('relative', className)} ref={ref}>
      <div
        className="p-[25px] text-[rgba(255,255,255,0.5)] bg-card rounded-[4px] text-[16px] leading-[calc(12/16)] outline-none font-[500] flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <span className={cn('flex-1', { ['text-[#D6E1FA]']: value })}>
          {value || placeholder}
        </span>
        <Image
          className={cn('transition-all', { ['rotate-180']: opened })}
          src="/icons/small-arrow.svg"
          alt=""
          width={14}
          height={14}
        />
      </div>
      {opened && (
        <div className="absolute bottom-[-5px] translate-y-[100%] rounded-[5px] w-[100%] p-[30px_25px] flex flex-col gap-[20px] bg-white/[0.03] max-h-[340px] overflow-y-scroll z-10 backdrop-blur-[25px]">
          {options.map((val) => (
            <div
              key={val}
              className="cursor-pointer"
              onClick={() => onSelect(val)}
            >
              {val}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
