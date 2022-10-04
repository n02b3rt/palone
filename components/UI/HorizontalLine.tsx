import styles from './HorizontalLine.module.scss';
import { DiAndroid } from 'react-icons/di';

const HorizontalLine = () => {
  return (
    <div className={styles.lineWrapper}>
      <hr className={styles.hr} />
      <p className={styles.iconWrapper}>
        <DiAndroid className={styles.icon} />
      </p>
      <hr className={styles.hr} />
    </div>
  );
};

export default HorizontalLine;
