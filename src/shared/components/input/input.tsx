import type { InputHTMLAttributes } from 'react';

import * as styles from './input.css';

const Input = ({ ...props }: InputHTMLAttributes<HTMLInputElement>) => {
  return <input className={styles.input} {...props} />;
};

export default Input;
