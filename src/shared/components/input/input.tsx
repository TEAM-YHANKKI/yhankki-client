import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

import * as styles from './input.css';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

const Input = ({ className, ...props }: InputProps) => {
  return <input className={clsx(styles.input, className)} {...props} />;
};

export default Input;
