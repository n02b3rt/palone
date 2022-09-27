import Head from 'next/head';
import { useState } from 'react';
import Changelog from '../components/Changelog';
import Hero from '../components/Hero';
import Main from '../components/Main';
import Team from '../components/Team';
import Features from '../components/Features.jsx';
import Download from '../components/Download';

const Home = () => {
  const [displayMain, setDisplayMain] = useState(false);
  // const [displayTeam, setDisplayTeam] = useState(false);
  const [displayFeatures, setDisplayFeatures] = useState(false);
  const [displayHero, setDisplayHero] = useState(true);

  const bottleClick = () => {
    // setDisplayTeam(true);
    setDisplayFeatures(true);
    setTimeout(() => {
      setDisplayHero(false);
      // setDisplayMain(true);
    }, 2000);
  };

  return (
    <>
      <Head>
        <title>Palone App</title>
      </Head>
      <div className='wrapper'>
        <Download display={displayFeatures} />
        <Features display={displayFeatures} />

        {/* <Main display={displayMain} /> */}
        {/* <Team display={displayTeam} /> */}
        <Hero display={displayHero} clickHandler={bottleClick} />
        {/* <Changelog /> */}
      </div>
    </>
  );
};

export default Home;
