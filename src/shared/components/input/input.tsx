import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';

import * as styles from './input.css';

const Input = ({
  className,
  ...props
}: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={clsx(styles.input, className)} {...props} />;
};

export default Input;
