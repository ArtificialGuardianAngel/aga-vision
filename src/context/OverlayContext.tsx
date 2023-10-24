import {
  FC,
  PropsWithChildren,
  ReactNode,
  createContext,
  useState,
} from 'react';

const noop = () => {};

interface IOverlayContext {
  opened: boolean;
  content: ReactNode;
  close: () => void;
  open: () => void;
  setContent: (content: ReactNode) => void;
}

const defaultContext: IOverlayContext = {
  content: null,
  opened: false,
  close: noop,
  open: noop,
  setContent: noop,
};

const OverlayContext = createContext<IOverlayContext>(defaultContext);

export const OverlayContextProvider: FC<PropsWithChildren> = ({ children }) => {
  const [opened, setOpened] = useState(false);
  const [content, setContent] = useState<ReactNode>(null);

  const open = () => {
    setOpened(true);
  };

  const close = () => {
    setOpened(false);
  };

  return (
    <OverlayContext.Provider
      value={{ opened, content, close, open, setContent }}
    >
      {children}
    </OverlayContext.Provider>
  );
};

export default OverlayContext;
