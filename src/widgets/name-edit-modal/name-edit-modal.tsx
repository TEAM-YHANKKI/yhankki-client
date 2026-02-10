import CtaButton from '@shared/components/cta-button/cta-button';
import Input from '@shared/components/input/input';
import Modal from '@shared/components/modal/modal';
import { CrossIcon, PenIcon } from '@shared/icons';
import { useState } from 'react';

import * as styles from './name-edit-modal.css';

const MAX_LENGTH = 4;

interface NameEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newName: string) => void;
}
const NameEditModal = ({ isOpen, onClose, onSubmit }: NameEditModalProps) => {
  const [newName, setNewName] = useState('');
  const isLong = newName.length > MAX_LENGTH;
  const isEmpty = newName.trim().length === 0;

  const handleClose = () => {
    setNewName('');
    onClose();
  };

  const handleSubmit = () => {
    if (isEmpty || isLong) return;

    onSubmit(newName);
    handleClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleClose}>
      <div className={styles.container}>
        <header className={styles.titleContainer}>
          <PenIcon />
          <div className={styles.modalTitle}>
            <div className={styles.mainTitleText}>
              <span>닉네임 수정</span>
              <button type='button' onClick={handleClose} aria-label='닫기'>
                <CrossIcon className={styles.crossIcon} />
              </button>
            </div>
            <p>새로운 이름을 알려주세요!</p>
          </div>
        </header>
        <section className={styles.inputSection}>
          <Input
            placeholder='닉네임을 입력해주세요'
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            className={styles.input}
          />
          {isLong && (
            <p className={styles.helperText}>
              닉네임은 최대 4글자까지만 가능해요!
            </p>
          )}
        </section>

        <CtaButton
          variant='navy'
          onClick={handleSubmit}
          disabled={isEmpty || isLong}
        >
          수정하기
        </CtaButton>
      </div>
    </Modal>
  );
};

export default NameEditModal;
