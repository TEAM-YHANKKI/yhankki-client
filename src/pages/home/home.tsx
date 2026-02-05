import CircleButton from '@shared/components/circle-button/circle-button';
import Notice from '@shared/components/notice/notice';
import { WhiteMainLogoIcon } from '@shared/icons';
import { LogoIcon, PenIcon, PersonIcon, StarIcon } from '@shared/icons';
import NameEditModal from '@widgets/name-edit-modal/name-edit-modal';
import RestaurantButton from '@widgets/restaurant-button/restaurant-button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './home.css';

const Home = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem('userNickname') || '포도';
  });

  const handleNicknameChange = (newNickname: string) => {
    setNickname(newNickname);
    localStorage.setItem('userNickname', newNickname);
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={styles.gradientHeader}>
        <WhiteMainLogoIcon className={styles.mainLogo} />
      </div>
      <main className={styles.overlayContainer}>
        <div className={styles.homeText}>
          <div className={styles.textButtonContainer}>
            <p>
              안녕하세요 <span className={styles.nickName}>{nickname}</span>님
            </p>
            <button
              type='button'
              className={styles.penButton}
              onClick={() => setIsModalOpen(true)}
            >
              <PenIcon />
            </button>
          </div>
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
          <CircleButton
            icon={<StarIcon />}
            label='제휴'
            onClick={() => navigate('/partnership')}
          />
          <CircleButton
            icon={<PersonIcon />}
            label='마이'
            onClick={() => navigate('/mypage')}
          />
          <CircleButton
            icon={<LogoIcon />}
            label='용인한끼팀'
            onClick={() => navigate('/team')}
          />
        </div>

        {isModalOpen && (
          <NameEditModal
            isOpen={isModalOpen}
            onSubmit={handleNicknameChange}
            onClose={() => setIsModalOpen(false)}
          />
        )}
      </main>
    </>
  );
};
export default Home;
