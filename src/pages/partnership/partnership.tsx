import { LogoIcon, WhiteMainLogoIcon } from '@shared/icons';
import { useNavigate } from 'react-router-dom';

import * as styles from './partnership.css';

const Partnership = () => {
  const navigate = useNavigate();

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
        <div className={styles.noticeContainer}>
          <LogoIcon className={styles.icon} />
          <p>제휴 페이지는 현재 준비중입니다.</p>
          <button
            type='button'
            className={styles.homeButton}
            onClick={() => navigate('/')}
          >
            홈으로 돌아가기
          </button>
        </div>
      </main>
    </>
  );
};
export default Partnership;
