import styles from './Main.module.scss';

const Main = ({ display }) => {
  return <main className={`${styles.main} ${display ? 'visible' : 'invisible'}`}>Main sec</main>;
};

export default Main;
