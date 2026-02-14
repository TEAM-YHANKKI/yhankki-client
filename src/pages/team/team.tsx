import CtaButton from '@shared/components/cta-button/cta-button';
import Notice from '@shared/components/notice/notice';
import ImageSlider from '@widgets/ImageSlider/image-slider';

import * as styles from './team.css';

const INSTAGRAM_URL = 'https://www.instagram.com/yongin_hankki';
const Team = () => {
  const handleInstagramClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <h3 className={styles.titleText}>용인한끼 사용 Tip</h3>
      <div className={styles.recruiting}>
        <Notice notice='피드백은 용인한끼 인스타그램에서!' />
        <ImageSlider />
        <CtaButton variant='primary' onClick={handleInstagramClick}>
          공식 인스타그램 바로가기
        </CtaButton>
      </div>
    </>
  );
};
export default Team;
