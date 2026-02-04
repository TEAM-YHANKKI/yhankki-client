import { LogoIcon } from '@shared/icons';
import { useEffect } from 'react';

import * as styles from './toast.css';

interface ToastProps {
  message: string;
  duration?: number;
  onClose: () => void;
}

const Toast = ({ message, duration = 2000, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(onClose, duration);
    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <div className={styles.toastContainer}>
      <div className={styles.toastBox}>
        <span className={styles.iconWrapper}>{<LogoIcon />}</span>
        <span className={styles.message}>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
