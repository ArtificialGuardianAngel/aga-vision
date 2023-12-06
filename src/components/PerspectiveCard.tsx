import { FC, PropsWithChildren } from 'react';
import cn from 'classnames';

interface Props {
  title: string;
  className?: string;
}

const PerspectiveCard: FC<Props & PropsWithChildren> = ({
  title,
  children,
  className,
}) => {
  return (
    <div
      className={cn(
        'p-[40px_30px] flex flex-col gap-[20px] bg-white/[0.03] rounded-[20px] shadow-[3px_3px_0px_0px_#11F4D1]',
        className,
      )}
    >
      <h5 className="text-accentGreen font-[600] text-[22px] leading-[calc(16/22)] md:text-[20px]">
        {title}
      </h5>
      <div className="h-[1px] w-full bg-white/20"></div>
      <div className="text-[16px] md:text-[15px]">{children}</div>
    </div>
  );
};

export default PerspectiveCard;
