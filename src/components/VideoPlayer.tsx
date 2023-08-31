'use-client';
import cn from 'classnames';
import { HTMLAttributes, PropsWithChildren } from 'react';
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
  // TODO: add behavior
  //   const [isClicked, setIsClicked] = useState(false);
  return (
    <section {...containerProps} className={cn(className, 'relative')}>
      <div
        className="z-50 absolute w-full h-full inset-0 rounded-[20px] flex items-center justify-center"
        style={{
          background: `linear-gradient(102deg, rgba(17, 244, 209, 0.50) 0%, rgba(124, 29, 206, 0.50) 100%), url(${placeHolderImage}), lightgray 50% / cover no-repeat`,
          backgroundPosition: 'center',
        }}
      >
        <VideoPlayButton />

        {/* <img
          className="w-full h-full inset-0 object-cover rounded-[20px]"
          
          src={placeHolderImage}
          alt="placeholder"
        /> */}
      </div>
      {children}
    </section>
  );
};
