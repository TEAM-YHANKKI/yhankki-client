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

      <hr className={styles.underLine} />

      <div className={styles.kcalInfo}>{kcal} kcal</div>
    </div>
  );
};

export default MealInfo;
