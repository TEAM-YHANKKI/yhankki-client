import RootLayout from '@app/layouts/root-layout';
import Home from '@pages/home/home';
import Menu from '@pages/menu/menu';
import Mypage from '@pages/mypage/mypage';
import Partnership from '@pages/partnership/partnership';
import Team from '@pages/team/team';
import { PATH } from '@shared/constants/path';
import { createBrowserRouter } from 'react-router-dom';

export const router = createBrowserRouter([
  {
    path: PATH.HOME,
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: PATH.MENU, element: <Menu /> },
      { path: PATH.PARTNERSHIP, element: <Partnership /> },
      { path: PATH.MYPAGE, element: <Mypage /> },
      { path: PATH.TEAM, element: <Team /> },
    ],
  },
]);
