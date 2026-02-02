import clsx from 'clsx';

import * as styles from './day-chip.css';

interface DayChip {
  day: string;
  date: number;
  select: boolean;
  onClick: () => void;
}

const DayChip = ({ day, date, select, onClick }: DayChip) => {
  return (
    <div
      className={clsx(styles.chip, { [styles.selected]: select })}
      onClick={onClick}
    >
      <span className={styles.dateText}>{date}</span>
      <span className={styles.dayText}>{day}</span>
    </div>
  );
};

export default DayChip;
