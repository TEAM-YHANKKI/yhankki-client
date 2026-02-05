import { WhiteMainLogoIcon } from '@shared/icons';
import DisplayMenu from '@widgets/display-menu/display-menu';
import TabBar from '@widgets/tab-bar/tab-bar';
import WeeklyCalendar from '@widgets/weekly-calendar/weekly-calendar';
import { useState } from 'react';

import * as styles from './menu.css';
import { MOCK_MENU_LIST } from './menu-mock';

const Menu = () => {
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());
  return (
    <>
      <div className={styles.gradientHeader}>
        <WhiteMainLogoIcon className={styles.mainLogo} />
      </div>
      <main className={styles.mainContainer}>
        <div className={styles.tabWrapper}>
          <TabBar selectedTab='studentHall' onTabChange={() => {}} />
        </div>

        <div className={styles.restaurantInfo}>
          <p>생활관 식당</p>
          <div className={styles.detailInfo}>
            <p>식당 위치 | 생활관 1층</p>
            <p>식당 운영 요일 | 월요일 ~ 금요일</p>
            <p>식당 운영 시간 | 00시 ~ 00시 </p>
          </div>
        </div>

        <div className={styles.menuDisplaySection}>
          <WeeklyCalendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />

          <div className={styles.menuList}>
            {MOCK_MENU_LIST.map((item) => (
              <DisplayMenu
                key={item.corner}
                corner={item.corner}
                price={item.price}
                menu={item.menu}
                kcal={item.kcal}
              />
            ))}
          </div>
          <p className={styles.notice}>
            식단 구성은 학교 사정에 따라 변경될 수 있어요
          </p>
        </div>
      </main>
    </>
  );
};
export default Menu;
