import { RESTAURANT_INFO } from '@shared/constants/restaurant-info';
import { WhiteMainLogoIcon } from '@shared/icons';
import { LogoIcon } from '@shared/icons';
import type { TabType } from '@shared/types/type';
import DisplayMenu from '@widgets/display-menu/display-menu';
import TabBar from '@widgets/tab-bar/tab-bar';
import WeeklyCalendar from '@widgets/weekly-calendar/weekly-calendar';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import * as styles from './menu.css';
import { MOCK_MENU_DATA } from './menu-mock';

const isValidTab = (id: string | undefined): id is TabType => {
  const validTabs: TabType[] = ['studentHall', 'yongoreum', 'dormitory'];
  return !!id && validTabs.includes(id as TabType);
};

const Menu = () => {
  const { restaurantId } = useParams();
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date().getDate());

  const currentTab = isValidTab(restaurantId) ? restaurantId : 'studentHall';
  const info = RESTAURANT_INFO[currentTab] || RESTAURANT_INFO.studentHall;
  const menuList = MOCK_MENU_DATA[currentTab]?.[selectedDate] || [];

  const handleTabChange = (id: TabType) => {
    navigate(`/menu/${id}`);
  };

  return (
    <>
      <div className={styles.gradientHeader}>
        <WhiteMainLogoIcon
          className={styles.mainLogo}
          onClick={() => navigate('/')}
        />
      </div>
      <main className={styles.mainContainer}>
        <div className={styles.tabWrapper}>
          <TabBar selectedTab={currentTab} onTabChange={handleTabChange} />
        </div>

        <div className={styles.restaurantInfo}>
          <p>{info.name}</p>
          <div className={styles.detailInfo}>
            <p>식당 위치 | {info.location}</p>
            <p>식당 운영 요일 | {info.days}</p>
            <p>식당 운영 시간 | {info.time} </p>
          </div>
        </div>

        <div className={styles.menuDisplaySection}>
          <WeeklyCalendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
          />

          <div className={styles.menuList}>
            {menuList.length > 0 ? (
              menuList.map((item) => (
                <DisplayMenu
                  key={item.corner}
                  corner={item.corner}
                  price={item.price}
                  menu={item.menu}
                  kcal={item.kcal}
                />
              ))
            ) : (
              <div className={styles.emptyWrapper}>
                <LogoIcon className={styles.emptyLogo} />
                <p className={styles.emptyText}>준비된 식단 정보가 없어요</p>
              </div>
            )}
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
