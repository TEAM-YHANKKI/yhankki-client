import CtaButton from '@shared/components/cta-button/cta-button';
import Input from '@shared/components/input/input';
import Modal from '@shared/components/modal/modal';
import { CrossIcon, HeartIcon, MinusIcon, PlusIcon } from '@shared/icons';

import * as styles from './like-edit-modal.css';

interface LikeEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  likeMenu: string[];
  onClick: () => void;
}

const LikeEditModal = ({
  isOpen,
  likeMenu,
  onClose,
  onClick,
}: LikeEditModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <header className={styles.titleContainer}>
          <HeartIcon />
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
                  aria-label={`${menu} 삭제`}
                  onClick={() => {
                    /* 삭제 로직 연결 */
                  }}
                >
                  <MinusIcon className={styles.icon} />
                </button>
                <span>{menu}</span>
              </li>
            ))}
          </ul>
          <div className={styles.inputSection}>
            <PlusIcon className={styles.icon} />
            <Input placeholder='메뉴를 입력해주세요' className={styles.input} />
          </div>
        </section>
        <CtaButton variant='navy' onClick={onClick}>
          수정하기
        </CtaButton>
      </div>
    </Modal>
  );
};

export default LikeEditModal;
