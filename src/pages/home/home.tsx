import { WhiteMainLogoIcon } from '@shared/icons';

import * as styles from './home.css';

const Home = () => {
  return (
    <>
      <div className={styles.gradientHeader}>
        <WhiteMainLogoIcon className={styles.mainLogo} />
      </div>
      <main className={styles.overlayContainer}></main>
    </>
  );
};
export default Home;
