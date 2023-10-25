import { FC, PropsWithChildren } from 'react';
import Overlay from './Overlay';

const LayoutContent: FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      {children}
      <Overlay />
    </>
  );
};

export default LayoutContent;
