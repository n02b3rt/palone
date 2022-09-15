import Head from 'next/head';
import { useState } from 'react';
import Changelog from '../components/Changelog';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Team from '../components/Team';
import Features from '../components/Features.jsx';

const Home = () => {
  const [displayMain, setDisplayMain] = useState(false);
  // const [displayTeam, setDisplayTeam] = useState(false);
  const [displayFeatures, setDisplayFeatures] = useState(false);
  const [displayHero, setDisplayHero] = useState(true);

  const bottleClick = () => {
    setDisplayMain(true);
    // setDisplayTeam(true);
    setDisplayFeatures(true);
    setTimeout(() => {
      setDisplayHero(false);
    }, 1000);
  };

  return (
    <>
      <Head>
        <title>Palone App</title>
      </Head>
      <div className='wrapper'>
        <Features display={displayFeatures} />
        <Main display={displayMain} />
        {/* <Team display={displayTeam} /> */}
        <Hero display={displayHero} clickHandler={bottleClick} />
        {/* <Changelog /> */}
      </div>
    </>
  );
};

export default Home;
