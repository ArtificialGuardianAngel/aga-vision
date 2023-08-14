'use client'
import { ReactNode, useCallback, useMemo, useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import cn from 'classnames';

export type AlertType = 'error' | 'success' | 'warning' | 'info';
export type AlertProps = {
  message: string;
  onClose?: () => void;
};

const Alert = ({ type, message }: AlertProps & { type: AlertType }) => (
  <section
    aria-label={'alert-error'}
    className={cn('flex justify-between p-4 border', {
      'bg-red-300/50 border-red-400': type === 'error',
      'bg-blue-300/50 border-blue-400': type === 'info',
      'bg-green-300/50 border-green-400': type === 'success',
      'bg-orange-300/50 border-orange-400': type === 'warning',
    })}
  >
    <pre className="text-start text-sm">{message}</pre>
    <button className="self-start">
      <AiOutlineClose />
    </button>
  </section>
);

export const useAlert = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState<AlertType>('info');
  const toggle = useCallback((message?: string, type?: AlertType) => {
    type && setType(type);
    message && setMessage(message);
    setIsOpen((p) => !p);
  }, []);

  const alertComponent = useMemo(() => {
    if (!isOpen) return null;
    return <Alert message={message} type={type} />;
  }, [type, message, isOpen]);

  const open = useCallback((message?: string, type?: AlertType) => {
    type && setType(type);
    setMessage(message || '');
    setIsOpen(true);
  }, []);
  const close = useCallback(() => {
    setIsOpen(false);
    setMessage('');
  }, []);

  return {
    toggle,
    close,
    open,
    alertComponent,
  };
};
