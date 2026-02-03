import * as styles from './tab-bar.css';

export type TabType = 'studentHall' | 'yongoreum' | 'dormitory';

interface TabBarProps {
  selectedTab: TabType;
  onTabChange: (tab: TabType) => void;
}

const TABS: { id: TabType; label: string }[] = [
  { id: 'studentHall', label: '학생회관' },
  { id: 'yongoreum', label: '용오름대학' },
  { id: 'dormitory', label: '생활관' },
];

const TabBar = ({ selectedTab, onTabChange }: TabBarProps) => {
  return (
    <div className={styles.container}>
      {TABS.map((tab) => {
        const isActive = selectedTab === tab.id;

        return (
          <div
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={styles.tabItem({
              isActive: isActive ? 'true' : 'false',
            })}
          >
            {tab.label}
            {isActive && <div className={styles.underLine} />}
          </div>
        );
      })}
    </div>
  );
};

export default TabBar;
