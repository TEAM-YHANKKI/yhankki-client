import { MOCK_MENU_DATA } from '@pages/menu/menu-mock';
import CircleButton from '@shared/components/circle-button/circle-button';
import Notice from '@shared/components/notice/notice';
import Toast from '@shared/components/toast/toast';
import { useLikeMenu } from '@shared/hooks/use-like-menu';
import { useNickname } from '@shared/hooks/use-nickname';
import {
  LogoIcon,
  PenIcon,
  PersonIcon,
  StarIcon,
  WhiteMainLogoIcon,
} from '@shared/icons';
import NameEditModal from '@widgets/name-edit-modal/name-edit-modal';
import RestaurantButton from '@widgets/restaurant-button/restaurant-button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './home.css';

const Home = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { nickname, updateNickname } = useNickname();
  const { likeMenu } = useLikeMenu(() => {});
  const today = new Date().getDate();

  const checkedIsLiked = (restaurant: keyof typeof MOCK_MENU_DATA) => {
    const todayMenu = MOCK_MENU_DATA[restaurant][today] || [];

    return todayMenu.some((item) =>
      item.menu.some((menuName) => likeMenu.includes(menuName)),
    );
  };

  const handleNicknameChange = (newNickname: string) => {
    updateNickname(newNickname);
    setIsModalOpen(false);
    setShowToast(true);
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
            <RestaurantButton
              type='studentHall'
              isLiked={checkedIsLiked('studentHall')}
              onClick={() => navigate('/menu/studentHall')}
            />
          </div>

          <RestaurantButton
            type='yongoreum'
            isLiked={checkedIsLiked('yongoreum')}
            onClick={() => navigate('/menu/yongoreum')}
          />
          <RestaurantButton
            type='dormitory'
            isLiked={checkedIsLiked('dormitory')}
            onClick={() => navigate('/menu/dormitory')}
          />
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

        {showToast && (
          <Toast
            message='닉네임이 수정되었어요!'
            onClose={() => {
              setShowToast(false);
            }}
          />
        )}
      </main>
    </>
  );
};
export default Home;
