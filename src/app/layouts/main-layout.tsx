import { PATH } from '@shared/constants/path';
import { WhiteMainLogoIcon } from '@shared/icons';
import { Outlet, useNavigate } from 'react-router-dom';

import * as styles from './main-layout.css';

const MainLayout = () => {
  const navigate = useNavigate();

  const navigateHome = () => {
    navigate(PATH.HOME);
  };

  return (
    <>
      <header className={styles.gradientHeader}>
        <button type='button' onClick={navigateHome} aria-label='홈으로 이동'>
          <WhiteMainLogoIcon className={styles.mainLogo} />
        </button>
      </header>
      <main className={styles.overlayContainer}>
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
