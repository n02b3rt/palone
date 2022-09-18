import styles from './Download.module.scss';

const Download = ({ display }) => {
  return (
    <section
      id='home'
      className={`${styles.download} ${display ? 'visible' : 'invisible'}`}
    >
      <div className={styles.download__column}>
        <div className={styles.phone__1}>
          <div className={('device', 'device-galaxy-s8')}>
            <div className='device__sensors'></div>
            <div className='device__frame'>
              <div className={styles.phone}></div>
            </div>
            {/* <Image className='device-screen' src='...' /> */}
            {/* cześć */}

            <div className='device__stripe'></div>
            <div className='device__header'></div>

            <div className='device__btns'></div>
            <div className='device__power'></div>
          </div>
        </div>
      </div>
      <div className={styles.phone__2}>
        <div className={('device', 'device-galaxy-s8')}>
          <div className='device__sensors'></div>
          <div className='device__frame'>
            <div className={styles.phone}></div>
          </div>
          {/* <Image className='device-screen' src='...' /> */}
          {/* cześć */}

          <div className='device__stripe'></div>
          <div className='device__header'></div>

          <div className='device__btns'></div>
          <div className='device__power'></div>
        </div>
      </div>

      <div className={styles.download__column}>
        <h2 className={styles.download__heading}>Palone</h2>
        <div className={styles.download__button}>Download</div>
        <div className={styles.download__apple}> (JEBAĆ JAPKA)</div>
      </div>
    </section>
  );
};

export default Download;
