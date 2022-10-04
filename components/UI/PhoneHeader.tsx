import styles from './PhoneHeader.module.scss';

const PhoneHeader = () => {
  return (
    <div className={styles.phone__header}>
      <div className={styles.phone__header__menu}>
        <span className={styles.phone__header__menu__hr}>
          <svg
            fill='#fff'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 32 32'
            width='32px'
            height='32px'
          >
            <path d='M 4 7 L 4 9 L 28 9 L 28 7 Z M 4 15 L 4 17 L 28 17 L 28 15 Z M 4 23 L 4 25 L 28 25 L 28 23 Z' />
          </svg>
        </span>
      </div>
      <div className={styles.phone__header__class}>Zmień klasę</div>
    </div>
  );
};

export default PhoneHeader;
