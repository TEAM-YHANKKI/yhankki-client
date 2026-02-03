import * as styles from './meal-info.css';

interface MealInfoProps {
  menu: string[];
  kcal: number;
}

const MealInfo = ({ menu, kcal }: MealInfoProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.menuList}>
        {menu.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </div>

      <div className={styles.underLine} />

      <div className={styles.kcalInfo}>
        {kcal > 0 ? `${kcal.toLocaleString()} kcal` : '칼로리 정보가 없습니다'}
      </div>
    </div>
  );
};

export default MealInfo;
