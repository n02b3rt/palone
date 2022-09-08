import styles from './Main.module.scss';

// const Main = ({ display }) => {
const Main = () => {
  // return <main className={`${styles.main} ${display ? 'visible' : 'invisible'}`}>Main sec</main>;
  return <main className={styles.main}>Main sec</main>;
};

export default Main;
