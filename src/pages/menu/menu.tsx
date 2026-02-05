import { WhiteMainLogoIcon } from '@shared/icons';

import * as styles from './menu.css';

const Menu = () => {
  return (
    <>
      <div className={styles.gradientHeader}>
        <WhiteMainLogoIcon className={styles.mainLogo} />
      </div>
      <main className={styles.overlayContainer}></main>
    </>
  );
};
export default Menu;
