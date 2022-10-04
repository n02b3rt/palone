import styles from './Download.module.scss';

interface Props {
  display: boolean;
}

const Download = ({ display }: Props) => {
  return (
    <section id='home' className={`${styles.download} ${display ? 'visible' : 'invisible'}`}>
      <div className={styles.download__column}>
        <div className={styles.phone__1}>
          <div className='device device-galaxy-s8'>
            <div className='device__sensors'></div>
            <div className='device__frame'>
              <div className={styles.phone__app}></div>
            </div>

            <div className='device__stripe'></div>
            <div className='device__header'></div>

            <div className='device__btns'></div>
            <div className='device__power'></div>
          </div>
        </div>

        <div className={styles.phone__2}>
          <div className='device device-galaxy-s8'>
            <div className='device__sensors'></div>
            <div className='device__frame'>
              <div className={styles.phone__logo}></div>
            </div>

            <div className='device__stripe'></div>
            <div className='device__header'></div>

            <div className='device__btns'></div>
            <div className='device__power'></div>
          </div>
        </div>
      </div>
      <div className={styles.download__column}>
        <h1 className={styles.download__heading}>Palone APP</h1>
        <p className={styles.download__after}>Aplikacja do naprawiania tego co edupage (elektryka) nie oferuje</p>
        <a
          href='https://drive.google.com/u/0/uc?id=19R_k11Mov2PVyLYk5Mg30lmmylrrRvu_&export=download&confirm=t&uuid=ed2fe3d6-d9fb-4952-af5e-a514d9a4c122'
          className={styles.download__button}
        >
          <svg version='1.1' xmlns='http://www.w3.org/2000/svg' className={styles.icon} viewBox='0 0 768 768'>
            <path
              fill='#fff'
              d='M480 160.5v-33h-31.5v33h31.5zM319.5 160.5v-33h-31.5v33h31.5zM496.5 69q79.5 57 79.5 154.5h-384q0-40.5 22.5-85.5t55.5-69l-42-42q-12-12 0-22.5t22.5 0l48 48q39-21 85.5-21 39 0 84 21l48-48q12-10.5 22.5 0t0 22.5zM655.5 256.5q19.5 0 33.75 14.25t14.25 33.75v223.5q0 21-14.25 34.5t-33.75 13.5-33.75-13.5-14.25-34.5v-223.5q0-19.5 14.25-33.75t33.75-14.25zM112.5 256.5q19.5 0 33.75 14.25t14.25 33.75v223.5q0 21-14.25 34.5t-33.75 13.5-33.75-13.5-14.25-34.5v-223.5q0-19.5 14.25-33.75t33.75-14.25zM192 576v-319.5h384v319.5q0 13.5-9 22.5t-22.5 9h-33v112.5q0 21-14.25 34.5t-33.75 13.5-33.75-13.5-14.25-34.5v-112.5h-63v112.5q0 21-14.25 34.5t-33.75 13.5-33.75-13.5-14.25-34.5v-112.5h-33q-13.5 0-22.5-9t-9-22.5z'
            ></path>
          </svg>
          Download
        </a>
        <div className={styles.download__apple}>(Nie stać nas na japka - korea tylko open software)</div>
      </div>
    </section>
  );
};

export default Download;
