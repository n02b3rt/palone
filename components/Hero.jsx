import styles from './Hero.module.scss';
import { useReducer } from 'react';
import HeroSVG from './UI/HeroSVG';

// btn = document.querySelector('.palone');

// btn = document.addEventListener('click', () => {
//   document.querySelector('#palone__wytrysk').style.display = 'block';
//   document.querySelector('#palone__logo').style.display = 'none';
//   document.querySelector('#palone__kapsel').classList.add('animate__kapsel');
//   warstwy = document.querySelectorAll('g[data-name="PIWO"]');
//   arr = Array.from(warstwy);
//   for (i = 0; i <= warstwy.length - 1; i++) {
//     arr[i].classList.add(`animate_${i}`);
//     console.log(i);
//   }
// });

const Hero = () => {
  return (
    <div className={styles.logo}>
      <HeroSVG />
    </div>
  );
};

export default Hero;
