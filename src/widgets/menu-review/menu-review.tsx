import { MOCK_MENU_DATA } from '@pages/menu/menu-mock';
import CtaButton from '@shared/components/cta-button/cta-button';
import DropDown from '@shared/components/drop-down/drop-down';
import type { TabType } from '@shared/types/type';
import { useMemo, useState } from 'react';

const RESTAURANT_NAMES: Record<TabType, string> = {
  studentHall: '학생회관',
  yongoreum: '용오름대학',
  dormitory: '생활관',
};

const RESTAURANT_OPTIONS = Object.entries(RESTAURANT_NAMES).map(
  ([id, label]) => ({
    id,
    label,
  }),
);

const MenuReview = () => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<TabType>('studentHall');
  const [selectedCorner, setSelectedCorner] = useState<string | null>(null);
  const [checkedMenus, setCheckedMenus] = useState<string[]>([]);

  const today = new Date().getDate();

  const dailyMenuData = useMemo(() => {
    return MOCK_MENU_DATA[selectedRestaurant]?.[today] || [];
  }, [selectedRestaurant, today]);

  const cornerOptions = useMemo(() => {
    return dailyMenuData.map((item) => ({
      id: item.corner,
      label: item.corner,
    }));
  }, [dailyMenuData]);

  const currentCornerId =
    selectedCorner || (cornerOptions.length > 0 ? cornerOptions[0].id : '');

  const currentCornerLabel = currentCornerId || '정보 없음';

  const currentMenuList =
    dailyMenuData.find((item) => item.corner === currentCornerId)?.menu || [];

  const handleRestaurantSelect = (id: string) => {
    setSelectedRestaurant(id as TabType);
    setSelectedCorner(null);
    setCheckedMenus([]);
  };

  const handleCheck = (menuName: string) => {
    setCheckedMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((m) => m !== menuName)
        : [...prev, menuName],
    );
  };

  return (
    <section>
      <div>
        <div>
          <p>오늘의 메뉴 리뷰</p>
          <DropDown
            options={RESTAURANT_OPTIONS}
            initialValue={{
              id: selectedRestaurant,
              label: RESTAURANT_NAMES[selectedRestaurant],
            }}
            onSelect={handleRestaurantSelect}
          />
          <DropDown
            options={cornerOptions}
            initialValue={{
              id: currentCornerId,
              label: currentCornerLabel,
            }}
            onSelect={(id) => setSelectedCorner(id)}
          />
        </div>
        <p>좋아하는 메뉴를 저장하면, 다음에 나올 때 알려드려요!</p>
      </div>
      <div>
        {currentMenuList.map((menu) => (
          <label key={menu}>
            <input
              type='checkbox'
              checked={checkedMenus.includes(menu)}
              onChange={() => handleCheck(menu)}
            />
            <span>{menu}</span>
          </label>
        ))}
      </div>
      <CtaButton variant='navy'>저장하기</CtaButton>
    </section>
  );
};

export default MenuReview;
