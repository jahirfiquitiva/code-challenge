import Head from 'next/head';
import Main from '@components/main/main';
import Intro from '@components/intro/intro';
import Posts from '@components/posts/posts';

const Home = () => {
  return (<>
    <Head>
      <title>MatterSupply ~ Code Challenge</title>
      <link rel={'icon'} href={'/favicon.ico'}/>
    </Head>

    <Main imageUrl={'/images/main.png'}>
      <Intro/>
      <Posts/>
    </Main>
  </>);
};

export default Home;
