import Image from 'next/image';
import {
  useContext,
  useEffect,
  useRef,
  useState,
  UIEvent as ReactUIEvent,
} from 'react';
import cn from 'classnames';
import OverlayContext from '@/context/OverlayContext';

const Overlay = () => {
  const { opened, content, close } = useContext(OverlayContext);
  const [backToTopButtonVisible, setBackToTopButtonVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const onBackToTopButtonClick = () => {
    if (ref.current) {
      ref.current.scrollTo(0, 0);
    }
  };

  const onScroll = (e: ReactUIEvent<HTMLDivElement, UIEvent>) => {
    if (e.currentTarget.scrollTop > 100) {
      setBackToTopButtonVisible(true);
    } else {
      setBackToTopButtonVisible(false);
    }
  };

  useEffect(() => {
    if (opened) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
  }, [opened]);

  return (
    <div
      className={cn(
        'overlay-page-background min-[1024px]:scrollbar fixed left-0 top-0 z-[1000] h-[100dvh] w-screen overflow-y-auto scroll-smooth p-[60px_20px] transition-all duration-500',
        {
          'top-0 left-0': opened,
          'top-full': !opened,
        },
      )}
      onScroll={onScroll}
      ref={ref}
    >
      <button
        className={cn(
          'fixed right-[20px] h-[40px] w-[40px] rounded-full border-2 border-accentGreen backdrop-blur-[10px] transition-all duration-500',
          {
            'top-[20px]': opened,
            'top-[calc(100%+20px)]': !opened,
          },
        )}
        onClick={(e) => close()}
      >
        <div className="absolute left-[50%] top-[50%] h-[2px] w-[16px] translate-x-[-50%] rotate-45 rounded-[2px] bg-accentGreen"></div>
        <div className="absolute left-[50%] top-[50%] h-[2px] w-[16px] translate-x-[-50%] rotate-[-45deg] rounded-[2px] bg-accentGreen"></div>
      </button>

      <div className="m-auto max-w-[920px]">{content}</div>

      {backToTopButtonVisible && (
        <button
          className="overflow:hidden fixed bottom-[20px] right-[20px] z-30 flex h-[40px] w-[40px] cursor-pointer items-center justify-center rounded-full border-2 border-accentGreen backdrop-blur-[10px]"
          onClick={onBackToTopButtonClick}
        >
          <Image src="/green-arrow-top.svg" alt="" width={14} height={14} />
        </button>
      )}
    </div>
  );
};

export default Overlay;
