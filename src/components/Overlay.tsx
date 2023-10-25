import { useContext, useEffect } from 'react';
import cn from 'classnames';
import OverlayContext from '@/context/OverlayContext';

const Overlay = () => {
  const { opened, content, close } = useContext(OverlayContext);

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
          'translate-y-0': opened,
          'translate-y-full': !opened,
        },
      )}
    >
      <button
        className="fixed right-[20px] top-[20px] h-[40px] w-[40px] rounded-full border-2 border-accentGreen backdrop-blur-[10px]"
        onClick={(e) => close()}
      >
        <div className="absolute left-[50%] top-[50%] h-[2px] w-[16px] translate-x-[-50%] rotate-45 rounded-[2px] bg-accentGreen"></div>
        <div className="absolute left-[50%] top-[50%] h-[2px] w-[16px] translate-x-[-50%] rotate-[-45deg] rounded-[2px] bg-accentGreen"></div>
      </button>

      <div className="m-auto max-w-[920px]">{content}</div>
    </div>
  );
};

export default Overlay;
