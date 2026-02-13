import { useLikeMenu } from '@shared/hooks/use-like-menu';

import * as styles from './meal-info.css';

interface MealInfoProps {
  menu: string[];
  kcal: number;
}

const MealInfo = ({ menu, kcal }: MealInfoProps) => {
  const { likeMenu } = useLikeMenu();

  return (
    <div className={styles.container}>
      <div className={styles.menuList}>
        {menu.map((item, index) => {
          const isLiked = likeMenu.includes(item);
          return (
            <span
              key={index}
              className={isLiked ? styles.likedMenuText : undefined}
            >
              {item}
            </span>
          );
        })}
      </div>

      <div className={styles.underLine} />

      <div className={styles.kcalInfo}>
        {kcal > 0 ? `${kcal.toLocaleString()} kcal` : '칼로리 정보가 없습니다'}
      </div>
    </div>
  );
};

export default MealInfo;
