export const PATH = {
  SPLASH: '/',
  HOME: '/home',
  MENU: '/menu/:restaurantId',
  PARTNERSHIP: '/partnership',
  MYPAGE: '/mypage',
  TEAM: '/team',
  getMenu: (restaurantId: string) => `/menu/${restaurantId}`,
} as const;
