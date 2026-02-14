import CtaButton from '@shared/components/cta-button/cta-button';
import Notice from '@shared/components/notice/notice';

import * as styles from './team.css';

const Team = () => {
  return (
    <>
      <h3 className={styles.titleText}>용인한끼 팀원 모집</h3>
      <div className={styles.recruiting}>
        <Notice notice='현재는 모집 기간이 아닙니다.' />
        <div className={styles.teamSection}>
          <CtaButton
            variant='navy'
            disabled={true}
            className={styles.applyButton}
          >
            지원하러 가기
          </CtaButton>
        </div>
      </div>
    </>
  );
};
export default Team;
