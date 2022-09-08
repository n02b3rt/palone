import Collapsible from 'react-collapsible';
import styles from './Changelog.module.scss';
import HorizontalLine from './UI/HorizontalLine';

const Changelog = () => {
  const version = 1.28;

  return (
    <section className={styles.changelog}>
      <HorizontalLine />
      <p>Logi</p>
      <div className={styles.listWrapper}>
        <Collapsible trigger={`V${version}`} className={styles.list}>
          <ul>
            <li>update timetable już śmiga (zmieńcie sobie default class bo sie oczywiście pozmieniały)</li>
          </ul>
        </Collapsible>
      </div>
    </section>
  );
};

export default Changelog;
