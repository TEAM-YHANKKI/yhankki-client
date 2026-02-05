import CircleButton from '@shared/components/circle-button/circle-button';
import Notice from '@shared/components/notice/notice';
import { WhiteMainLogoIcon } from '@shared/icons';
import { LogoIcon, PersonIcon, StarIcon } from '@shared/icons';
import RestaurantButton from '@widgets/restaurant-button/restaurant-button';

import * as styles from './home.css';

const Home = () => {
  return (
    <>
      <div className={styles.gradientHeader}>
        <WhiteMainLogoIcon className={styles.mainLogo} />
      </div>
      <main className={styles.overlayContainer}>
        <div className={styles.homeText}>
          <p>안녕하세요 포도님</p>
          <p>오늘도 든든한 하루 되세요!</p>
        </div>

        <Notice notice='용인한끼 리뉴얼 완료!' />

        <div className={styles.restaurantGrid}>
          <div className={styles.fullWidth}>
            <RestaurantButton type='studentHall' onClick={() => {}} />
          </div>

          <RestaurantButton type='yongoreum' onClick={() => {}} />
          <RestaurantButton type='dormitory' onClick={() => {}} />
        </div>

        <div className={styles.circleButton}>
          <CircleButton icon={<StarIcon />} label='제휴' onClick={() => {}} />
          <CircleButton icon={<PersonIcon />} label='마이' onClick={() => {}} />
          <CircleButton
            icon={<LogoIcon />}
            label='용인한끼팀'
            onClick={() => {}}
          />
        </div>
      </main>
    </>
  );
};
export default Home;
