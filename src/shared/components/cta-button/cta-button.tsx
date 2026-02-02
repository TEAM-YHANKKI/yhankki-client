import type { ButtonHTMLAttributes, ReactNode } from 'react';

type CtaVariant = 'primary' | 'sub' | 'navy';

interface CtaButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: CtaVariant;
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
      // className={buttonRecipe({ variant })} // Vanilla Extract 적용 예시
      {...props}
    >
      {children}
    </button>
  );
};

export default CtaButton;
