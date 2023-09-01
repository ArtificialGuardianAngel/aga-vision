import React from 'react';
import cn from 'classnames';

interface Props {
  fullPage?: boolean;
}

const VideoBackground: React.FC<Props> = ({ fullPage = true }) => {
  return (
    <>
      <div
        className={cn(
          'top-0 left-0 w-screen h-[100dvh] -z-10 wrapper-background',
          { absolute: !fullPage, fixed: fullPage },
        )}
      ></div>
      <video
        className={cn('top-0 left-0 w-screen h-[100dvh] -z-20 object-cover', {
          absolute: !fullPage,
          fixed: fullPage,
        })}
        autoPlay
        loop
        muted
      >
        <source src="/video-bg.mp4" type="video/mp4" />
      </video>
      {!fullPage && (
        <div className="absolute top-0 left-0 w-screen h-[100dvh] gradient -z-10"></div>
      )}
    </>
  );
};

export default VideoBackground;
