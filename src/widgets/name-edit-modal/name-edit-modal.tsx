import CtaButton from '@shared/components/cta-button/cta-button';
import Input from '@shared/components/input/input';
import Modal from '@shared/components/modal/modal';
import { CrossIcon, PenIcon } from '@shared/icons';
import { useState } from 'react';

import * as styles from './name-edit-modal.css';

interface NameEditModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (newName: string) => void;
}
const NameEditModal = ({ isOpen, onClose, onSubmit }: NameEditModalProps) => {
  const [newName, setNewName] = useState('');

  const handleSubmit = () => {
    if (newName.trim().length === 0) return;

    onSubmit(newName);
    setNewName('');
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className={styles.container}>
        <header className={styles.titleContainer}>
          <PenIcon />
          <div className={styles.modalTitle}>
            <div className={styles.mainTitleText}>
              <span>닉네임 수정</span>
              <CrossIcon className={styles.crossIcon} onClick={onClose} />
            </div>
            <p>앞으로 불리고 싶은 새로운 이름을 알려주세요!</p>
          </div>
        </header>
        <section className={styles.input}>
          <Input
            placeholder='닉네임을 입력해주세요'
            onChange={(e) => setNewName(e.target.value)}
          />
        </section>
        <CtaButton
          variant='navy'
          onClick={handleSubmit}
          disabled={!newName.trim()}
        >
          수정하기
        </CtaButton>
      </div>
    </Modal>
  );
};

export default NameEditModal;
