import CtaButton from '@shared/components/cta-button/cta-button';
import Input from '@shared/components/input/input';
import Modal from '@shared/components/modal/modal';
import { CrossIcon, HeartIcon, MinusIcon, PlusIcon } from '@shared/icons';
import { useState } from 'react';

import * as styles from './like-edit-modal.css';

interface LikeEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  likeMenu: string[];
  onDelete: (name: string) => void;
  onAdd: (name: string) => void;
}

const LikeEditModal = ({
  isOpen,
  likeMenu,
  onClose,
  onDelete,
  onAdd,
}: LikeEditModalProps) => {
  const [inputValue, setInputValue] = useState('');

  const handleAddSubmit = () => {
    if (!inputValue.trim()) return;
    onAdd(inputValue);
    setInputValue('');
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
          <ul className={styles.menuList}>
            {likeMenu.map((menu, index) => (
              <li key={`${menu}-${index}`} className={styles.menuItem}>
                <button
                  type='button'
                  className={styles.iconButton}
                  aria-label={`${menu} 삭제`}
                  onClick={() => {
                    onDelete(menu);
                  }}
                >
                  <MinusIcon />
                </button>
                <span>{menu}</span>
              </li>
            ))}
          </ul>
          <div className={styles.inputSection}>
            <button
              type='button'
              className={styles.iconButton}
              onClick={handleAddSubmit}
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
        <CtaButton variant='navy' onClick={onClose}>
          수정 완료
        </CtaButton>
      </div>
    </Modal>
  );
};

export default LikeEditModal;
