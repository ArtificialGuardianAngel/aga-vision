'use client';

import { FC, PropsWithChildren } from 'react';
import { OverlayContextProvider } from '@/context/OverlayContext';
import LayoutContent from './LayoutContent';

const Providers: FC<PropsWithChildren> = ({ children }) => {
  return (
    <OverlayContextProvider>
      <LayoutContent>{children}</LayoutContent>
    </OverlayContextProvider>
  );
};

export default Providers;
