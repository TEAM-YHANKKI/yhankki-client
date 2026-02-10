import { LogoIcon } from '@shared/icons';
import { useEffect } from 'react';
import { createPortal } from 'react-dom'; // 1. 추가

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

  // 2. createPortal로 감싸서 body 직계 자식으로 렌더링
  return createPortal(
    <div className={styles.toastContainer}>
      <div className={styles.toastBox}>
        <span className={styles.iconWrapper}>
          <LogoIcon />
        </span>
        <span className={styles.message}>{message}</span>
      </div>
    </div>,
    document.body,
  );
};

export default Toast;
