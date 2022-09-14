import HeroSVG from './UI/HeroSVG';

const Hero = ({ display, clickHandler }) => {
  return (
    <section className={`${!display ? 'invisible' : ''}`}>
      <HeroSVG clickHandler={clickHandler} />
    </section>
  );
};

export default Hero;
