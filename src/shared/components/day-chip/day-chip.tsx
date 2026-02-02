interface DayChip {
  day: string;
  date: number;
  select: boolean;
  onClick: () => void;
}

const DayChip = ({ day, date, select, onClick }: DayChip) => {
  return (
    <div>
      <span>{date}</span>
      <span>{day}</span>
    </div>
  );
};

export default DayChip;
