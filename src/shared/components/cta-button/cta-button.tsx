import type { ButtonHTMLAttributes, ReactNode } from 'react';

import * as styles from './cta-button.css';

type CtaVariant = 'primary' | 'sub' | 'navy';

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: CtaVariant;
}

const CtaButton = ({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  onClick,
  ...props
}: CtaButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={styles.ctaButtonRecipe({ variant })}
      {...props}
    >
      {children}
    </button>
  );
};

export default CtaButton;
