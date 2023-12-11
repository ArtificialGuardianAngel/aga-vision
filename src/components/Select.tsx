'use client';

import Image from 'next/image';
import React, { useRef, useState } from 'react';
import cn from 'classnames';
import classNames from 'classnames';
import { useOnClickOutside } from 'usehooks-ts';

const LETTERS = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
];

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
  const childElementsRefs = useRef<HTMLDivElement[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

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

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (opened && LETTERS.includes(e.key)) {
      e.preventDefault();
      const found = childElementsRefs.current.find(
        (el) => el?.textContent?.toLowerCase().startsWith(e.key),
      );

      if (found && dropdownRef.current) {
        dropdownRef.current.scroll(0, found.offsetTop);
      }
    }
  };

  useOnClickOutside(ref, closeDropdown);

  return (
    <div className={cn('relative', className)} ref={ref}>
      <div
        className="p-[25px] text-[rgba(255,255,255,0.5)] bg-card rounded-[4px] text-[16px] leading-[calc(12/16)] outline-none font-[500] flex justify-between items-center cursor-pointer"
        onClick={toggleDropdown}
        onKeyDown={handleKeyDown}
        tabIndex={0}
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
        <div
          className="absolute bottom-[-5px] translate-y-[100%] rounded-[5px] w-[100%] p-[30px_25px] flex flex-col gap-[20px] bg-white/[0.03] max-h-[340px] overflow-y-scroll z-10 backdrop-blur-[25px]"
          ref={dropdownRef}
        >
          {options.map((val, idx) => (
            <div
              key={val}
              ref={(el) => {
                if (el) {
                  childElementsRefs.current[idx] = el;
                }
              }}
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
