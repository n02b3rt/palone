import styles from './Main.module.scss';
import MainSVG from './UI/MainSVG';

interface Props {
  display: boolean;
}

const Main = ({ display }: Props) => {
  return (
    <section id='home' className={`${styles.aboutus} ${display ? 'visible' : 'invisible'}`}>
      <MainSVG klasa={styles.aboutus__logo} />
      <div className={styles.aboutus__text}>
        <p className={styles.aboutus__text__p}>
          Projekt PaloneApp prowadzi (jak tego można się domyślać) grupa Palone (co prawda mała grupa, bo dwuosobowa, no ale jednak). Do niej należą
          deweloperzy, czyli zwykli uczniowie technikum oraz pasjonaci informatyki, designu, szeroko pojętego front i back endu oraz piwa. To ostatnie napędza
          nas najbardziej. Oj tak. Na zagramanicy żłopaliśmy to na potęgę. W sumie nie tylko to. Ogólnie alkohol był naszym motywem przewodnim wyjazdu poza ten
          pierdolnik. Innymi słowy, było zajebiście. Ale wracając do opisu, przedstawię może teraz nasz zespół
        </p>
        <a href='#' className={styles.btn}>
          Zobacz zespół
        </a>
      </div>
    </section>
  );
};

export default Main;
