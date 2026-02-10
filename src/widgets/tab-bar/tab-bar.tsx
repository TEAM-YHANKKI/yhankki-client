import type { TabType } from '@shared/types/type';

import * as styles from './tab-bar.css';

interface TabBarProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TABS = [
  { id: 'studentHall', label: '학생회관' },
  { id: 'yongoreum', label: '용오름대학' },
  { id: 'dormitory', label: '생활관' },
] as const;

const TabBar = ({ selectedTab, onTabChange }: TabBarProps) => {
  return (
    <div className={styles.container} role='tablist'>
      {TABS.map((tab) => {
        const isActive = selectedTab === tab.id;

        return (
          <button
            key={tab.id}
            type='button'
            role='tab'
            aria-selected={isActive}
            onClick={() => onTabChange(tab.id)}
            className={styles.tabItem({
              isActive: isActive ? 'active' : 'inactive',
            })}
          >
            {tab.label}
            {isActive && (
              <div className={styles.underLine} aria-hidden='true' />
            )}
          </button>
        );
      })}
    </div>
  );
};

export default TabBar;
