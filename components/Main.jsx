import styles from './Main.module.scss';
import MainSVG from './UI/MainSVG';

// const Main = ({ display }) => {
const Main = () => {
  // return <main className={`${styles.main} ${display ? 'visible' : 'invisible'}`}>Main sec</main>;
  return (
    <section className={styles.aboutus}>
      <MainSVG klasa={styles.aboutus__logo} />
      <div className={styles.aboutus__text}>
        <p className={styles.aboutus__text__p}>
          Projekt PaloneApp prowadzi (jak tego można się domyślać) grupa Palone
          (co prawda mała grupa, bo dwuosobowa, no ale jednak). Do niej należą
          deweloperzy, czyli zwykli uczniowie technikum oraz pasjonaci
          informatyki, designu, szeroko pojętego front i back endu oraz piwa. To
          ostatnie napędza nas najbardziej. Oj tak. Na zagramanicy żłopaliśmy to
          na potęgę. W sumie nie tylko to. Ogólnie alkohol był naszym motywem
          przewodnim wyjazdu poza ten pierdolnik. Innymi słowy, było zajebiście.
          Ale wracając do opisu, przedstawię może teraz nasz zespół
        </p>
        <a href='#' className={styles.btn}>
          Zobacz zespół
        </a>
        {/* <p className={styles.aboutus__text__p}> 
					- Ja, Oskar – no co będę o sobie pisał, lubię
          apki na Androida (bo do iOS trzeba mieć maczka), szeroko pojętą deweloperkę (aplikacji oczywiście), oraz czarny humor (tak czarny, że aż rower
          kradnie). Łatwe zadania to chujowe zadania. Prowadzę projekt na warstwie Androida, co jest zajebiście czasochłonne, ale wielce satysfakcjonujące.
          Jestem też prekursorem tego całego przedsięwzięcia. I dobrze. </p>
					<p className={styles.aboutus__text__p}>- Norke - człowiek wielu talentów, mocnej głowy i - co najważniejsze- zajebisty
          przyjaciel. No kurwa drugiego takiego ze świecą szukać. Ogarnia fronta jak mało kto (w sumie jest jeszcze jeden taki w klasie), nie ma rzeczy
          niemożliwych dla tego człowieka (czasami jest po prostu leniwą kurwą, ale kawusia stawia go na nogi i wtedy jest git xD). Jest autorem tej strony, jak
          i wielu innych. Aktualnie to szuka loga, także jeszcze można na nim zarobić (zaraz sobie pewnie zrobi, ale chuj w to). </p>-
					
					CEL PROJEKTU Naszym celem jest
          zrobienie aplikacji ułatwiającej życie przeciętego ucznia elektryka. I chyba nam się powoli udaje 🙂. Aplikacja prezentuje dane z naszego edupejdża w
          sposób przyjazny, szybki i intuicyjny. Ponadto zawiera funkcje, których brak na podstawowej stronie naszej szkoły (n.in. filtrowanie zastępstw po
          klasach, powiadomienia na telefon, przeglądanie planu lekcji wg. nauczyciela). Plan lekcji zapisuje się w pamięci urządzenia, co pomaga w użytkowaniu
          przy ograniczonym dostępie do Internetu (czyli w sumie w większości klas w szkole). -->
        </p>*/}
      </div>
    </section>
  );
};

export default Main;
