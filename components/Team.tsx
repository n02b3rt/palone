import styles from './Team.module.scss';

interface Props {
  display: boolean;
}

const Team = ({ display }: Props) => {
  return (
    <section
      // id='home'
      className={`${styles.team} ${display ? 'visible' : 'invisible'}`}
    >
      <div className={styles.team__description}>
        <article className={styles.team__description__article}>
          <h3 className={styles.team__description__heading}> Oskar</h3>
          <p className={styles.team__description__paragraph}>
            no co będę o sobie pisał...
            <br /> Lubię apki na Androida (bo do iOS trzeba mieć maczka), szeroko pojętą deweloperkę (aplikacji oczywiście), oraz czarny humor (tak czarny, że
            aż rower kradnie). Łatwe zadania to chujowe zadania. Prowadzę projekt na warstwie Androida, co jest zajebiście czasochłonne, ale wielce
            satysfakcjonujące. Jestem też prekursorem tego całego przedsięwzięcia. I dobrze.
          </p>
        </article>
        <article className={styles.team__description__article}>
          <p className={styles.team__description__paragraph}>
            człowiek wielu talentów, mocnej głowy i - co najważniejsze- zajebisty przyjaciel. No kurwa drugiego takiego ze świecą szukać. Ogarnia fronta jak
            mało kto (w sumie jest jeszcze jeden taki w klasie), nie ma rzeczy niemożliwych dla tego człowieka (czasami jest po prostu leniwą kurwą, ale kawusia
            stawia go na nogi i wtedy jest git xD). Jest autorem tej strony, jak i wielu innych. Aktualnie to szuka loga, także jeszcze można na nim zarobić
            (zaraz sobie pewnie zrobi, ale chuj w to).
          </p>
          <h4 className={styles.team__description__heading}>Norek</h4>
        </article>
        <article className={styles.team__description__article}>
          <h4 className={styles.team__description__heading}>Czeken</h4>
          <p className={styles.team__description__paragraph}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Porttitor lacus luctus
            accumsan tortor posuere ac. Justo donec enim diam vulputate ut. Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque sit. Amet mattis
            vulputate enim nulla aliquet porttitor lacus luctus. Diam donec adipiscing tristique risus nec. Ut etiam sit amet nisl purus in. Dictumst vestibulum
            rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris pharetra et ultrices neque ornare.
          </p>
        </article>
      </div>
    </section>
  );
};

export default Team;
