import styles from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={styles.hero}>
      <figure className={styles.imageBox}></figure>
      <a href='#chuj' className={styles.btn}>
        POBIERZ SE APKE KURWIU
      </a>
    </div>
  );
};

export default Hero;
