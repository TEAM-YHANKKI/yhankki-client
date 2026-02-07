import Toast from '@shared/components/toast/toast';
import { STORAGE_KEYS } from '@shared/constants/storage';
import { PenIcon, WhiteMainLogoIcon } from '@shared/icons';
import MenuReview from '@widgets/menu-review/menu-review';
import NameEditModal from '@widgets/name-edit-modal/name-edit-modal';
import { useState } from 'react';

import * as styles from './mypage.css';

const Mypage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const [nickname, setNickname] = useState(() => {
    return localStorage.getItem(STORAGE_KEYS.USER_NICKNAME) || '포도';
  });

  const handleNicknameChange = (newNickname: string) => {
    setNickname(newNickname);
    localStorage.setItem(STORAGE_KEYS.USER_NICKNAME, newNickname);
    setIsModalOpen(false);
    setShowToast(true);
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
export default Mypage;
