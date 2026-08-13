import CircleButton from '@shared/components/circle-button/circle-button';
import Notice from '@shared/components/notice/notice';
import Toast from '@shared/components/toast/toast';
import { PATH } from '@shared/constants/path';
import { useLikeMenu } from '@shared/hooks/use-like-menu';
import { useNickname } from '@shared/hooks/use-nickname';
import { LogoIcon, PenIcon, PersonIcon, StarIcon } from '@shared/icons';
import { formatLocalDate } from '@shared/lib/date/format-local-date';
import NameEditModal from '@widgets/name-edit-modal/name-edit-modal';
import RestaurantButton from '@widgets/restaurant-button/restaurant-button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useNotices } from 'src/features/home/hooks/use-notices';
import { useMeals } from 'src/features/menu/hooks/use-meals';

import * as styles from './home.css';

interface MealItem {
  id: number;
  corner: string;
  menu: string[];
  price: number;
  kcal: number;
  restaurant_type: string;
  date_day: string;
}

const Home = () => {
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { nickname, updateNickname } = useNickname();
  const { likeMenu } = useLikeMenu(() => {});
  const { data: notices = [] } = useNotices('home');
  const displayNotice = notices[0]?.content || '새로운 공지사항이 없습니다.';
  const today = formatLocalDate(new Date());

  const { data: studentHallMenu = [] } = useMeals('studentHall', today);
  const { data: yongoreumMenu = [] } = useMeals('yongoreum', today);
  const { data: dormitoryMenu = [] } = useMeals('dormitory', today);

  const checkedIsLiked = (menuList: MealItem[]) => {
    return menuList.some((item) =>
      item.menu.some((menuName: string) => likeMenu.includes(menuName)),
    );
  };

  const handleNicknameChange = (newNickname: string) => {
    updateNickname(newNickname);
    setIsModalOpen(false);
    setShowToast(true);
  };

  return (
    <>
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

      <Notice notice={displayNotice} />

      <div className={styles.restaurantGrid}>
        <div className={styles.fullWidth}>
          <RestaurantButton
            type='studentHall'
            isLiked={checkedIsLiked(studentHallMenu)}
            onClick={() => navigate(PATH.getMenu('studentHall'))}
          />
        </div>

        <RestaurantButton
          type='yongoreum'
          isLiked={checkedIsLiked(yongoreumMenu)}
          onClick={() => navigate(PATH.getMenu('yongoreum'))}
        />
        <RestaurantButton
          type='dormitory'
          isLiked={checkedIsLiked(dormitoryMenu)}
          onClick={() => navigate(PATH.getMenu('dormitory'))}
        />
      </div>

      <div className={styles.circleButton}>
        <CircleButton
          icon={<StarIcon />}
          label='제휴'
          onClick={() => navigate(PATH.PARTNERSHIP)}
        />
        <CircleButton
          icon={<PersonIcon />}
          label='마이'
          onClick={() => navigate(PATH.MYPAGE)}
        />
        <CircleButton
          icon={<LogoIcon />}
          label='용인한끼팀'
          onClick={() => navigate(PATH.TEAM)}
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
    </>
  );
};
export default Home;
