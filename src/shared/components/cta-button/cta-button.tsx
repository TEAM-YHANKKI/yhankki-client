import clsx from 'clsx';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

import * as styles from './cta-button.css';

type CtaVariant = 'primary' | 'sub' | 'navy';

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: CtaVariant;
  className?: string;
}

const CtaButton = ({
  children,
  variant = 'primary',
  type = 'button',
  disabled = false,
  className,
  onClick,
  ...props
}: CtaButtonProps) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={clsx(styles.ctaButtonRecipe({ variant }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default CtaButton;
