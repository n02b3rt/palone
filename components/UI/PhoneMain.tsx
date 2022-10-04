import styles from './PhoneMain.module.scss';

interface Props {
  isVisible: boolean;
}

const PhoneMain = ({ isVisible }: Props) => {
  return (
    <article className={styles.main} style={{ display: `${isVisible ? 'block' : 'none'}` }}>
      <div className={styles.days}>
        <ul className={styles.days__list}>
          <li className={styles.days__item}>
            <span>Pn</span>
          </li>
          <li className={styles.days__item}>
            <span>Wt</span>
          </li>
          <li className={styles.days__item}>
            <span>Śr</span>
          </li>
          <li className={styles.days__item}>
            <span>Czw</span>
          </li>
          <li className={styles.days__item}>
            <span>Pi</span>
          </li>
        </ul>
      </div>
      <div className={styles.timetable}>
        <div className={styles.timetable__item}>
          <div className={styles.timetable__item__number}>
            <span className={styles.timetable__numless}>1</span>
            <p className={styles.timetable__paragraph}>
              <span>07:55</span>
              <span>-</span>
              <span>08:40</span>
            </p>
          </div>
          <div className={styles.timetable__item__class}>
            <span className={styles.class}>4ft(g)</span>
            <span className={styles.room}>A33</span>
          </div>
          <div className={styles.timetable__item__lesson}>Matem</div>
          <div className={styles.timetable__item__group}>
            <span className={styles.class}>Cała klasa</span>
            <span className={styles.room}>MS</span>
          </div>
        </div>
        <div className={styles.timetable__item}>
          <div className={styles.timetable__item__number}>
            <span className={styles.timetable__numless}>2</span>
            <p className={styles.timetable__paragraph}>
              <span>07:55</span>
              <span>-</span>
              <span>08:40</span>
            </p>
          </div>
          <div className={styles.timetable__item__class}>
            <span className={styles.class}>4ft(g)</span>
            <span className={styles.room}>A33</span>
          </div>
          <div className={styles.timetable__item__lesson}>Matem</div>
          <div className={styles.timetable__item__group}>
            <span className={styles.class}>Cała klasa</span>
            <span className={styles.room}>MS</span>
          </div>
        </div>
        <div className={styles.timetable__item}>
          <div className={styles.timetable__item__number}>
            <span className={styles.timetable__numless}>3</span>
            <p className={styles.timetable__paragraph}>
              <span>07:55</span>
              <span>-</span>
              <span>08:40</span>
            </p>
          </div>
          <div className={styles.timetable__item__class}>
            <span className={styles.class}>4ft(g)</span>
            <span className={styles.room}>A33</span>
          </div>
          <div className={styles.timetable__item__lesson}>Matem</div>
          <div className={styles.timetable__item__group}>
            <span className={styles.class}>Cała klasa</span>
            <span className={styles.room}>MS</span>
          </div>
        </div>
        <div className={styles.timetable__double}>
          <div className={styles.timetable__item}>
            <div className={styles.timetable__item__number}>
              <span className={styles.timetable__numless}>4</span>
              <p className={styles.timetable__paragraph}>
                <span>07:55</span>
                <span>-</span>
                <span>08:40</span>
              </p>
            </div>
            <div className={styles.timetable__item__class}>
              <span className={styles.class}>4ft(g)</span>
              <span className={styles.room}>A33</span>
            </div>
            <div className={styles.timetable__item__lesson}>AI</div>
            <div className={styles.timetable__item__group}>
              <span className={styles.class}>1.Grupa</span>
              <span className={styles.room}>MM</span>
            </div>
          </div>
          <div className={styles.timetable__item}>
            <div className={styles.timetable__item__number}>
              {/* <span className={styles.timetable__numless}>4</span>
              <p className={styles.timetable__paragraph}>
                <span>07:55</span>
                <span>-</span>
                <span>08:40</span>
              </p> */}
            </div>
            <div className={styles.timetable__item__class}>
              <span className={styles.class}>4ft(g)</span>
              <span className={styles.room}>A33</span>
            </div>
            <div className={styles.timetable__item__lesson}>BD</div>
            <div className={styles.timetable__item__group}>
              <span className={styles.class}>2.Grupa</span>
              <span className={styles.room}>RJ</span>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
};

export default PhoneMain;
