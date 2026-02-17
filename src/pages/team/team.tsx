import CtaButton from '@shared/components/cta-button/cta-button';
import Notice from '@shared/components/notice/notice';
import ImageSlider from '@widgets/Image-slider/image-slider';
import { useNotices } from 'src/features/home/hooks/use-notices';
import { useCarousels } from 'src/features/team/hooks/use-carousels';

import * as styles from './team.css';

const INSTAGRAM_URL = 'https://www.instagram.com/yongin_hankki';
const Team = () => {
  const { data: carouselData = [] } = useCarousels();
  const { data: notices = [] } = useNotices('team');
  const displayNotice = notices[0]?.content || '새로운 공지사항이 없습니다.';

  const handleInstagramClick = () => {
    window.open(INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };
  return (
    <>
      <h3 className={styles.titleText}>용인한끼 사용 Tip</h3>
      <div className={styles.recruiting}>
        <Notice notice={displayNotice} />
        <ImageSlider images={carouselData} />
        <CtaButton variant='primary' onClick={handleInstagramClick}>
          공식 인스타그램 바로가기
        </CtaButton>
      </div>
    </>
  );
};
export default Team;
