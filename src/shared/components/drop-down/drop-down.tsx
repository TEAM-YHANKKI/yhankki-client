import { ArrowIcon } from '@shared/icons';
import clsx from 'clsx';
import { useState } from 'react';

import * as styles from './drop-down.css';

interface DropDownProps {
  options: { id: string; label: string }[];
  initialValue: { id: string; label: string };
  onSelect: (id: string) => void;
  className?: string;
}

const DropDown = ({
  options,
  initialValue,
  onSelect,
  className,
}: DropDownProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={clsx(styles.container, className)}>
      <button
        type='button'
        className={styles.trigger}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        {initialValue.label}
        <ArrowIcon />
      </button>

      {isOpen && (
        <ul className={styles.optionList}>
          {options.map((option) => (
            <li
              key={option.id}
              className={styles.option}
              onClick={() => {
                onSelect(option.id);
                setIsOpen(false);
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;
