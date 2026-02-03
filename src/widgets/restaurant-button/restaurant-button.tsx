import { MainIcon } from '@shared/icons';

import * as styles from './restaurant-button.css';

export type RestaurantType = 'studentHall' | 'dormitory' | 'yongoreum';

const RESTAURANT_NAMES: Record<RestaurantType, string> = {
  studentHall: '학생회관 식당',
  dormitory: '기숙사 식당',
  yongoreum: '용오름대학 식당',
};

interface RestaurantButtonProps {
  type: RestaurantType;
  onClick: (type: RestaurantType) => void;
}

const RestaurantButton = ({ type, onClick }: RestaurantButtonProps) => {
  return (
    <button onClick={() => onClick(type)}>
      <div>
        <span>{RESTAURANT_NAMES[type]}</span>
        <MainIcon />
      </div>
      <div />
    </button>
  );
};

export default RestaurantButton;
