'use client';

import cn from 'classnames';
import { HTMLAttributes, PropsWithChildren, useState } from 'react';
import { VideoPlayButton } from './VideoPlayButton';

type Props = PropsWithChildren<{
  containerProps: HTMLAttributes<HTMLDivElement>;
  placeHolderImage: string;
}>;

export const VideoPlayer = ({
  containerProps: { className, ...containerProps },
  children,
  placeHolderImage,
}: Props) => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section {...containerProps} className={cn(className, 'relative')}>
      <div className="relative aspect-video">
        <div
          className={cn(
            'z-20 absolute w-full h-full inset-0 rounded-[20px] flex items-center justify-center',
            { hidden: isClicked },
          )}
          style={{
            background: `linear-gradient(102deg, rgba(17, 244, 209, 0.50) 0%, rgba(124, 29, 206, 0.50) 100%), url(${placeHolderImage}), lightgray 50% / cover no-repeat`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }}
        >
          <VideoPlayButton onClick={() => setIsClicked(true)} />
        </div>
        {children}
      </div>
    </section>
  );
};
