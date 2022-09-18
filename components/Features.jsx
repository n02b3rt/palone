import styles from './Features.module.scss';
import PhoneHeader from './UI/PhoneHeader';
import PhoneFooter from './UI/PhoneFooter';
import PhoneMain from './UI/PhoneMain';
import Substitution from './UI/Substitution';
// import './devices.css/dist/devices.css';

const Features = ({ display }) => {
  return (
    <section
      id='home'
      className={`${styles.features} ${display ? 'visible' : 'invisible'}`}
    >
      <div className={('device', 'device-galaxy-s8')}>
        <div className='device__sensors'></div>
        <div className='device__frame'>
          <div className={styles.phone}>
            <PhoneHeader />
            {/* Tutaj ma się wyświetlać Substitution - gdy j******* w zastępstwa, no a PhoneMain - jak w plan lekcji na telefonie plus jako domyślny ma być chyba PhoneMain */}
            <Substitution />
            <PhoneMain />
            <PhoneFooter />
          </div>
        </div>
        {/* <Image className='device-screen' src='...' /> */}
        {/* cześć */}

        <div className='device__stripe'></div>
        <div className='device__header'></div>

        <div className='device__btns'></div>
        <div className='device__power'></div>
      </div>
    </section>
  );
};

export default Features;
