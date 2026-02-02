import type { InputHTMLAttributes } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  hasError: boolean;
}

const Input = ({ className, hasError, ...props }: InputProps) => {
  return <input />;
};

export default Input;
