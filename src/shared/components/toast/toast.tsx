import type { ReactNode } from 'react';
import { useEffect } from 'react';

interface ToastProps {
  icon: ReactNode;
  message: string;
  duration?: number;
  onClose: () => void;
}

const Toast = ({ icon, message, duration = 3000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div>
      <div>{icon}</div>
      <span>{message}</span>
    </div>
  );
};

export default Toast;
