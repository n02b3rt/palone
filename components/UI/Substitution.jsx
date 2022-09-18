// import { SassNumber } from 'sass';
import styles from './Substitution.module.scss';

const Substitution = ({ isVisible }) => {
  return (
    <article className={styles.main} style={{ display: `${isVisible ? 'block' : 'none'}` }}>
      <nav className={styles.navbar}>
        <div className={styles.navigation}>
          <div className={styles.navigation__larrow}></div>
        </div>
        <div className={styles.navigation__head}>Zastępstwa na 2022-09-19</div>
        <div className={styles.navigation}>
          <div className={styles.navigation__rarrow}></div>
        </div>
      </nav>
      {/*  */}
      <div className={styles.substitiutution__item}>
        <span className={styles.substitiutution__schlclass}>4dl</span>
        <div className={styles.substitiutution__internal}>
          <span className={styles.substitiutution__lesson}>(1)</span>
          <span className={styles.substitiutution__content}>
            ang1:jang &nbsp; A*** O*******, Anulowano
            <span className={styles.substitiutution__room}></span>
          </span>
        </div>
      </div>
      {/*  */}
      <div className={styles.substitiutution__item}>
        <span className={styles.substitiutution__schlclass}>4eft</span>
        <div className={styles.substitiutution__internal}>
          <span className={styles.substitiutution__lesson}>2</span>
          <span className={styles.substitiutution__content}>
            jpol &rarr; matem &nbsp; E**** G**** &rarr; A*** W**** Zmień sale lekcyjną: A24 &rarr; B04
            <span className={styles.substitiutution__room}></span>
          </span>
        </div>
      </div>
      {/*  */}
      <div className={styles.substitiutution__item}>
        <span className={styles.substitiutution__schlclass}>4ftg</span>
        <div className={styles.substitiutution__internal}>
          <span className={styles.substitiutution__lesson}>3</span>
          <span className={styles.substitiutution__content}>
            1 Grupa: jangZ &rarr; WF &nbsp; A*** O******* &rarr; A****** Ł****
            <span className={styles.substitiutution__room}></span>
          </span>
        </div>
        <div className={styles.substitiutution__internal}>
          <span className={styles.substitiutution__lesson}>6</span>
          <span className={styles.substitiutution__content}>
            jpol &nbsp; A*** K****** &rarr; E** K********
            <span className={styles.substitiutution__room}></span>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Substitution;
