import CtaButton from '@shared/components/cta-button/cta-button';
import Toast from '@shared/components/toast/toast';
import { useLikeMenu } from '@shared/hooks/use-like-menu';
import { useNickname } from '@shared/hooks/use-nickname';
import { PenIcon, WhiteMainLogoIcon } from '@shared/icons';
import LikeEditModal from '@widgets/like-edit-modal/like-edit-modal';
import LikeMenu from '@widgets/like-menu/like-menu';
import MenuReview from '@widgets/menu-review/menu-review';
import NameEditModal from '@widgets/name-edit-modal/name-edit-modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './mypage.css';

const Mypage = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLikeModalOpen, setIsLikeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const { nickname, updateNickname } = useNickname();
  const { likeMenu, addLike, updateLikeMenu } = useLikeMenu(setToastMessage);

  const handleNicknameChange = (newNickname: string) => {
    updateNickname(newNickname);
    setIsModalOpen(false);
    setToastMessage('닉네임이 수정되었어요!');
  };

  return (
    <>
      <div className={styles.gradientHeader}>
        <button
          type='button'
          aria-label='용인한끼'
          onClick={() => {
            navigate('/');
          }}
        >
          <WhiteMainLogoIcon className={styles.mainLogo} />
        </button>
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
          <MenuReview onClick={addLike} />
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
            onSubmit={updateLikeMenu}
            onClose={() => setIsLikeModalOpen(false)}
            setToast={setToastMessage}
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
