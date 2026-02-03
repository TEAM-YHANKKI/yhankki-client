import type { ReactNode } from 'react';

import * as styles from './circle-button.css';

interface CircleButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

const CircleButton = ({ icon, label, onClick }: CircleButtonProps) => {
  return (
    <div className={styles.container}>
      <button className={styles.button} onClick={onClick}>
        {icon}
      </button>
      <span className={styles.label}>{label}</span>
    </div>
  );
};

export default CircleButton;
