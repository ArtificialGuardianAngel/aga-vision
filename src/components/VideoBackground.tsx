import React from 'react';
import cn from 'classnames';

interface Props {
  fullPage?: boolean;
  videoSource?: string;
  mask?: boolean;
}

const VideoBackground: React.FC<Props> = ({
  fullPage = true,
  videoSource = '/video-bg.mp4',
  mask = true,
}) => {
  return (
    <>
      <div
        className={cn('top-0 left-0 w-screen h-[100dvh] -z-10', {
          absolute: !fullPage,
          fixed: fullPage,
          ['wrapper-background']: mask,
        })}
      ></div>
      <video
        className={cn('top-0 left-0 w-screen h-[100dvh] -z-20 object-cover', {
          absolute: !fullPage,
          fixed: fullPage,
        })}
        autoPlay
        loop
        muted
        controls={false}
        playsInline
      >
        {videoSource === '/video-bg.mp4' && (
          <source src="video-bg.webm" type='video/webm; codecs="vp8, vorbis"' />
        )}
        <source
          src={videoSource}
          type='video/mp4; codecs="avc1.42E01E, mp4a.40.2"'
        />
      </video>
      {!fullPage && (
        <div className="absolute top-0 left-0 w-screen h-[100dvh] gradient -z-10"></div>
      )}
    </>
  );
};

export default VideoBackground;
