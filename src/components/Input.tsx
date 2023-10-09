import React, { HTMLProps } from 'react';
import cn from 'classnames';

interface Props extends HTMLProps<HTMLInputElement> {
  prefix?: string;
}

const Input: React.FC<Props> = ({ className, prefix, ...props }) => {
  return (
    <div
      className={cn(
        className,
        'p-[20px_25px] bg-card rounded-[4px] inline-flex gap-[10px] items-center',
      )}
    >
      {prefix && <span className="text-[15px] text-mainColor">{prefix}</span>}
      <input
        className={cn(
          'placeholder:text-[rgba(255,255,255,0.5)] text-[16px] leading-[calc(12/16)] outline-none text-[#D6E1FA] w-full bg-transparent appearance-none',
        )}
        {...props}
      />
    </div>
  );
};

export default Input;
