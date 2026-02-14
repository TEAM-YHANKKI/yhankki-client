import GoogleAnalytics from '@shared/lib/analytics/google-analytics';
import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <div>
      <main>
        <GoogleAnalytics />
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
