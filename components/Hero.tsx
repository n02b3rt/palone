import HeroSVG from './UI/HeroSVG';

import type { NextComponentType, NextPageContext } from 'next';

interface Props {
  display: boolean;
  clickHandler: () => void;
}

const Hero: NextComponentType<NextPageContext, {}, Props> = ({ display, clickHandler }: Props) => {
  return (
    <section className={`${!display ? 'invisible' : ''}`} style={{ height: '100vh' }}>
      <HeroSVG clickHandler={clickHandler} />
    </section>
  );
};

export default Hero;
