import CtaButton from '@shared/components/cta-button/cta-button';
import Input from '@shared/components/input/input';
import Modal from '@shared/components/modal/modal';
import { CrossIcon, HeartIcon, MinusIcon, PlusIcon } from '@shared/icons';
import { useState } from 'react';

import * as styles from './like-edit-modal.css';

interface LikeEditModalProps {
  isOpen: boolean;
  likeMenu: string[];
  onClose: () => void;
  onSubmit: (newList: string[]) => void;
  setToast: (msg: string) => void;
}

const LikeEditModal = ({
  isOpen,
  likeMenu,
  onClose,
  onSubmit,
  setToast,
}: LikeEditModalProps) => {
  const [inputValue, setInputValue] = useState('');
  const [tempList, setTempList] = useState(likeMenu);

  const isChanged =
    tempList.length !== likeMenu.length ||
    tempList.some((item, index) => item !== likeMenu[index]);

  const handleAdd = () => {
    const trimmed = inputValue.trim();

    if (!trimmed) {
      setToast('메뉴 이름을 입력해주세요!');
      return;
    }

    if (tempList.includes(trimmed)) {
      setToast('이미 등록된 메뉴입니다.');
      return;
    }
    if (tempList.length >= 6) {
      setToast('최대 6개까지만 등록 가능합니다.');
      return;
    }

    setTempList((prev) => [...prev, trimmed]);
    setInputValue('');
  };

  const handleDelete = (name: string) => {
    setTempList((prev) => prev.filter((item) => item !== name));
  };

  const handleComplete = () => {
    onSubmit(tempList);
    setToast('좋아하는 메뉴가 수정되었어요!');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <header className={styles.titleContainer}>
          <HeartIcon className={styles.heartIcon} />
          <div className={styles.modalTitle}>
            <div className={styles.mainTitleText}>
              <span>좋아하는 메뉴 수정</span>
              <button type='button' onClick={onClose} aria-label='닫기'>
                <CrossIcon className={styles.crossIcon} />
              </button>
            </div>
            <p>좋아하는 메뉴를 수정할 수 있어요!</p>
          </div>
        </header>
        <section className={styles.menuListSection}>
          {tempList.length > 0 && (
            <ul className={styles.menuList}>
              {tempList.map((menu, index) => (
                <li key={`${menu}-${index}`} className={styles.menuItem}>
                  <button
                    type='button'
                    className={styles.iconButton}
                    onClick={() => handleDelete(menu)}
                    aria-label={`${menu} 삭제`}
                  >
                    <MinusIcon />
                  </button>
                  <span>{menu}</span>
                </li>
              ))}
            </ul>
          )}
          <div className={styles.inputSection}>
            <button
              type='button'
              aria-label='메뉴 추가'
              className={styles.iconButton}
              onClick={handleAdd}
            >
              <PlusIcon />
            </button>

            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder='메뉴를 입력해주세요'
              className={styles.input}
            />
          </div>
        </section>
        <CtaButton
          variant='navy'
          onClick={handleComplete}
          disabled={!isChanged}
        >
          수정 완료
        </CtaButton>
      </div>
    </Modal>
  );
};

export default LikeEditModal;
