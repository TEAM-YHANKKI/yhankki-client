import DayChip from '@shared/components/day-chip/day-chip';
import { formatLocalDate } from '@shared/lib/date/format-local-date';
import { useMemo } from 'react';

import * as styles from './weekly-calendar.css';

interface WeeklyCalendarProps {
  selectedDate: string;
  onDateSelect: (date: string) => void;
}

const WeeklyCalendar = ({
  selectedDate,
  onDateSelect,
}: WeeklyCalendarProps) => {
  const weekDays = useMemo(() => {
    const today = new Date();
    const currentDay = today.getDay();
    const currentDate = today.getDate();

    const dist = currentDay === 0 ? -6 : 1 - currentDay;
    const monday = new Date(today.setDate(currentDate + dist));

    const days = [];
    const dayLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    for (let i = 0; i < 6; i++) {
      const d = new Date(monday);
      d.setDate(monday.getDate() + i);

      days.push({
        label: dayLabels[i],
        date: d.getDate(),
        value: formatLocalDate(d),
      });
    }
    return days;
  }, []);

  return (
    <div className={styles.container}>
      {weekDays.map((item) => (
        <DayChip
          key={item.value}
          day={item.label}
          date={item.date}
          select={selectedDate === item.value}
          onClick={() => onDateSelect(item.value)}
        />
      ))}
    </div>
  );
};

export default WeeklyCalendar;
