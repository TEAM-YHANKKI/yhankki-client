import type { ReactNode } from 'react';

interface CircleButtonProps {
  icon: ReactNode;
  label: string;
  onClick: () => void;
}

const CircleButton = ({ icon, label, onClick }: CircleButtonProps) => {
  return (
    <div>
      <button onClick={onClick}>{icon}</button>
      <span>{label}</span>
    </div>
  );
};

export default CircleButton;
