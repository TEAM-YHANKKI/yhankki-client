import CtaButton from '@shared/components/cta-button/cta-button';
import { PATH } from '@shared/constants/path';
import { LogoIcon } from '@shared/icons';
import { useNavigate } from 'react-router-dom';

import * as styles from './partnership.css';

const Partnership = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.noticeContainer}>
        <LogoIcon className={styles.icon} />
        <p>제휴 페이지는 현재 준비중입니다.</p>
        <CtaButton
          className={styles.homeButton}
          onClick={() => navigate(PATH.HOME)}
        >
          홈으로 돌아가기
        </CtaButton>
      </div>
    </>
  );
};
export default Partnership;
