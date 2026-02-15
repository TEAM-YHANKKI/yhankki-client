import { PATH } from '@shared/constants/path';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import * as styles from './splash.css';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(PATH.HOME, { replace: true });
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className={styles.container}>
      <div className={styles.logoWrapper}>
        <img
          src='/splash-logo.webp'
          alt='용인한끼 로고'
          className={styles.logoImage}
        />
      </div>
    </div>
  );
};

export default SplashScreen;
