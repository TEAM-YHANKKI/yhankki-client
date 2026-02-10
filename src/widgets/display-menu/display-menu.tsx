import MealInfo from '@shared/components/meal-info/meal-info';

import * as styles from './display-menu.css';

interface DisplayMenuProps {
  corner: string;
  price: number;
  menu: string[];
  kcal: number;
}

const DisplayMenu = ({ corner, price, menu, kcal }: DisplayMenuProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.cornerInfo}>
        <div className={styles.bar} />
        <div className={styles.infoText}>
          <span>{corner}</span>
          <span className={styles.price}>{price}원</span>
        </div>
      </div>
      <div className={styles.mealInfoWrapper}>
        <MealInfo menu={menu} kcal={kcal} />
      </div>
    </div>
  );
};

export default DisplayMenu;
