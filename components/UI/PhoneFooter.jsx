import footer from './PhoneFooter.module.scss';
import styles from './PhoneHeader.module.scss';

const PhoneFooter = () => {
  return (
    <div className={styles.phone__footer}>
      <div className={styles.phone__header__class}>Zastępstwa</div>
      <div className={styles.phone__header__class}>Plan Lekcji</div>
    </div>
  );
};

export default PhoneFooter;
