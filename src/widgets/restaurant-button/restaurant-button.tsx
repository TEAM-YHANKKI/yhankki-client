import { MainIcon } from '@shared/icons';

import * as styles from './restaurant-button.css';

export type RestaurantType = 'studentHall' | 'dormitory' | 'yongoreum';

const RESTAURANT_NAMES: Record<RestaurantType, string> = {
  studentHall: '학생회관 식당',
  dormitory: '생활관\n식당',
  yongoreum: '용오름대학\n식당',
};

interface RestaurantButtonProps {
  type: RestaurantType;
  isLiked?: boolean;
  onClick: (type: RestaurantType) => void;
}

const RestaurantButton = ({
  type,
  isLiked,
  onClick,
}: RestaurantButtonProps) => {
  return (
    <button
      className={styles.button({ restaurant: type })}
      onClick={() => onClick(type)}
    >
      <div className={styles.titleSection}>
        <span className={styles.titleText}>{RESTAURANT_NAMES[type]}</span>
        <MainIcon className={styles.icon({ isLiked })} />
      </div>
      <div
        className={styles.imageArea({ restaurant: type })}
        role='presentation'
      />
    </button>
  );
};

export default RestaurantButton;
