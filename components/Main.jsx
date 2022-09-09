import styles from './Main.module.scss';
import MainSVG from './UI/MainSVG';

// const Main = ({ display }) => {
const Main = () => {
  // return <main className={`${styles.main} ${display ? 'visible' : 'invisible'}`}>Main sec</main>;
  // style={{ display: 'none' }}
  return <main className={styles.main}>Main sec</main>;
};

export default Main;
