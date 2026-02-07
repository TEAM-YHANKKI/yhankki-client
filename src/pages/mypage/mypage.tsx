import CtaButton from '@shared/components/cta-button/cta-button';
import Toast from '@shared/components/toast/toast';
import { STORAGE_KEYS } from '@shared/constants/storage';
import { PenIcon, WhiteMainLogoIcon } from '@shared/icons';
import LikeEditModal from '@widgets/like-edit-modal/like-edit-modal';
import LikeMenu from '@widgets/like-menu/like-menu';
import MenuReview from '@widgets/menu-review/menu-review';
import NameEditModal from '@widgets/name-edit-modal/name-edit-modal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './mypage.css';

const Mypage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.USER_NICKNAME) || '포도';
  });

  const [likeMenu, setLikeMenu] = useState<string[]>(() => {
    const saved = localStorage.getItem(STORAGE_KEYS.LIKE_MENU);
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LIKE_MENU, JSON.stringify(likeMenu));
  }, [likeMenu]);

  const handleNicknameChange = (newNickname: string) => {
    setNickname(newNickname);
    localStorage.setItem(STORAGE_KEYS.USER_NICKNAME, newNickname);
    setIsModalOpen(false);
    setToastMessage('닉네임이 수정되었어요!');
  };

  const handleMenuSave = (selectedMenus: string[]) => {
    const newItems = selectedMenus.filter((menu) => !likeMenu.includes(menu));

    if (likeMenu.length + newItems.length > 10) {
      setToastMessage('최대 10개까지만 등록 가능합니다.');
      return;
    }

    if (newItems.length > 0) {
      setLikeMenu((prev) => [...prev, ...newItems]);
      setToastMessage('선택한 메뉴가 찜 목록에 저장되었어요!');
    } else {
      setToastMessage('이미 찜 목록에 있는 메뉴들입니다.');
    }
  };

  const handleDeleteLike = (name: string) => {
    setLikeMenu((prev) => prev.filter((item) => item !== name));
  };

  const handleAddLike = (name: string) => {
    if (likeMenu.length >= 10) {
      setToastMessage('최대 10개까지만 등록 가능합니다.');
      return;
    }
    setLikeMenu((prev) => [...prev, name]);
  };

  return (
    <>
      <div className={styles.gradientHeader}>
        <WhiteMainLogoIcon className={styles.mainLogo} />
      </div>
      <main className={styles.overlayContainer}>
        <div className={styles.text}>
          <p>어서오세요, {nickname}님</p>
          <button
            type='button'
            className={styles.penButton}
            onClick={() => setIsModalOpen(true)}
          >
            <PenIcon />
          </button>
        </div>

        <div className={styles.menuReview}>
          <MenuReview onClick={handleMenuSave} />
        </div>

        <div className={styles.likeMenuSection}>
          <p>좋아하는 메뉴</p>
          <LikeMenu
            likeMenu={likeMenu}
            onClick={() => setIsLikeModalOpen(true)}
          />
        </div>

        <div className={styles.partnershipContainer}>
          <p>제휴식당</p>
          <div className={styles.partnership}>
            <p>용인대의 제휴식당을 확인해보세요</p>
            <CtaButton
              variant='sub'
              onClick={() => {
                navigate('/partnership');
              }}
              className={styles.partnershipButton}
            >
              제휴식당으로 이동하기
            </CtaButton>
          </div>
        </div>

        {isModalOpen && (
          <NameEditModal
            isOpen={isModalOpen}
            onSubmit={handleNicknameChange}
            onClose={() => setIsModalOpen(false)}
          />
        )}

        {isLikeModalOpen && (
          <LikeEditModal
            isOpen={isLikeModalOpen}
            likeMenu={likeMenu}
            onDelete={handleDeleteLike}
            onAdd={handleAddLike}
            onClose={() => setIsLikeModalOpen(false)}
          />
        )}

        {toastMessage && (
          <Toast
            message={toastMessage}
            onClose={() => {
              setToastMessage('');
            }}
          />
        )}
      </main>
    </>
  );
};
export default Mypage;
