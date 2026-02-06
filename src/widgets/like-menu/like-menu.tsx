import CtaButton from '@shared/components/cta-button/cta-button';
import { HeartIcon } from '@shared/icons';

import * as styles from './like-menu.css';

interface LikeMenuProps {
  likeMenu: string[];
  onClick: () => void;
}

const LikeMenu = ({ likeMenu, onClick }: LikeMenuProps) => {
  const hasMenu = likeMenu.length > 0;

  return (
    <section className={styles.container}>
      {hasMenu ? (
        <ul className={styles.list}>
          {likeMenu.map((item) => (
            <li key={item} className={styles.item}>
              <HeartIcon className={styles.icon} />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.emptyText}>아직 찜한 메뉴가 없어요.</p>
      )}

      <CtaButton variant='primary' onClick={onClick}>
        수정하기
      </CtaButton>
    </section>
  );
};

export default LikeMenu;
