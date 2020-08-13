import Head from 'next/head';
import Main from '@components/main/main';
import Toolbar from '@components/toolbar/toolbar';

const Home = () => {
  return (<>
    <Head>
      <title>MatterSupply ~ Code Challenge</title>
      <link rel={'icon'} href={'/favicon.ico'}/>
    </Head>

    <Main imageUrl={'/images/main.png'}>
      <Toolbar/>
      <p>Hola Mundo</p>
    </Main>
  </>);
};

export default Home;
