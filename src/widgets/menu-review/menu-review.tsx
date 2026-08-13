import CtaButton from '@shared/components/cta-button/cta-button';
import DropDown from '@shared/components/drop-down/drop-down';
import { formatLocalDate } from '@shared/lib/date/format-local-date';
import type { TabType } from '@shared/types/type';
import { useMemo, useState } from 'react';
import { useMeals } from 'src/features/menu/hooks/use-meals';

import * as styles from './menu-review.css';

const RESTAURANT_NAMES: Record<TabType, string> = {
  studentHall: '학생회관',
  yongoreum: '용오름대',
  dormitory: '생활관',
};

const RESTAURANT_OPTIONS = Object.entries(RESTAURANT_NAMES).map(
  ([id, label]) => ({
    id,
    label,
  }),
);

interface MenuReviewProps {
  onClick: (selectedMenus: string[]) => void;
}

const MenuReview = ({ onClick }: MenuReviewProps) => {
  const [selectedRestaurant, setSelectedRestaurant] =
    useState<TabType>('studentHall');
  const [selectedCorner, setSelectedCorner] = useState<string | null>(null);
  const [checkedMenus, setCheckedMenus] = useState<string[]>([]);

  const today = formatLocalDate(new Date());
  const { data: dailyMenuData = [] } = useMeals(selectedRestaurant, today);

  const cornerOptions = useMemo(() => {
    return dailyMenuData.map((item) => ({
      id: item.corner,
      label: item.corner,
    }));
  }, [dailyMenuData]);

  const currentCornerId =
    selectedCorner || (cornerOptions.length > 0 ? cornerOptions[0].id : '');

  const currentCornerLabel = currentCornerId || '없음';

  const currentMenuList =
    dailyMenuData.find((item) => item.corner === currentCornerId)?.menu || [];

  const isButtonDisabled = checkedMenus.length === 0;

  const handleRestaurantSelect = (id: string) => {
    setSelectedRestaurant(id as TabType);
    setSelectedCorner(null);
    setCheckedMenus([]);
  };

  const handleCornerSelect = (id: string) => {
    setSelectedCorner(id);
    setCheckedMenus([]);
  };

  const handleCheck = (menuName: string) => {
    setCheckedMenus((prev) =>
      prev.includes(menuName)
        ? prev.filter((m) => m !== menuName)
        : [...prev, menuName],
    );
  };

  const handleSubmit = () => {
    onClick(checkedMenus);
    setCheckedMenus([]);
  };

  return (
    <section className={styles.container}>
      <div className={styles.titleSection}>
        <div className={styles.select}>
          <p>오늘의 메뉴</p>
          <div className={styles.dropdown}>
            <DropDown
              className={styles.restaurantSelect}
              options={RESTAURANT_OPTIONS}
              initialValue={{
                id: selectedRestaurant,
                label: RESTAURANT_NAMES[selectedRestaurant],
              }}
              onSelect={handleRestaurantSelect}
            />
            <DropDown
              className={styles.cornerSelect}
              options={cornerOptions}
              initialValue={{
                id: currentCornerId,
                label: currentCornerLabel,
              }}
              onSelect={handleCornerSelect}
            />
          </div>
        </div>
        <p className={styles.description}>
          좋아하는 메뉴를 저장하면, 다음에 알려드려요!
        </p>
      </div>
      {currentMenuList.length > 0 ? (
        <div className={styles.menuList}>
          {currentMenuList.map((menu: string) => (
            <label key={menu} className={styles.menu}>
              <input
                type='checkbox'
                checked={checkedMenus.includes(menu)}
                onChange={() => handleCheck(menu)}
                className={styles.checkbox}
              />
              <span>{menu}</span>
            </label>
          ))}
        </div>
      ) : (
        <div className={styles.emptyState}>
          <p>오늘은 메뉴 정보가 없어요.</p>
        </div>
      )}
      <CtaButton
        variant='navy'
        onClick={handleSubmit}
        disabled={isButtonDisabled}
      >
        저장하기
      </CtaButton>
    </section>
  );
};

export default MenuReview;
