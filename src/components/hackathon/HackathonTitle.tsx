import { FC, HTMLProps, PropsWithChildren } from 'react';
import cn from 'classnames';

const HackathonTitle: FC<PropsWithChildren & HTMLProps<HTMLTitleElement>> = ({
  children,
  className,
  id,
}) => {
  return (
    <h2
      className={cn(
        className,
        'text-[40px] text-white font-[600] text-center md:text-[26px]',
      )}
    >
      {children}
    </h2>
  );
};

export default HackathonTitle;
