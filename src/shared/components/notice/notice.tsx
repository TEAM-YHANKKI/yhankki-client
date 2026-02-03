import * as styles from './notice.css';

interface NoticeProps {
  notice: string;
}

const Notice = ({ notice }: NoticeProps) => {
  return (
    <div className={styles.container}>
      <span className={styles.title}>공지사항</span>
      <div className={styles.bar} />
      <p className={styles.noticeText}>{notice}</p>
    </div>
  );
};

export default Notice;
