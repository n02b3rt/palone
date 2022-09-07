import Head from 'next/head';
import { useState } from 'react';
import Hero from '../components/Hero';
import Main from '../components/Main';

const Home = () => {
  const [visible, setVisible] = useState(false);

  const display = async () => setVisible(true);

  setTimeout(display, 5000);

  return (
    <>
      <Head>
        <title>Palone App</title>
      </Head>
      <div>
        <Main display={visible} />
        <Hero />
      </div>
    </>
  );
};

export default Home;
