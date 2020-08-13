import Head from 'next/head';
import Main from '@components/main/main';
import Intro from '@components/intro/intro';
import Posts from '@components/posts/posts';
import Post from '@components/post/post';

const Home = () => {
  return (<>
    <Head>
      <title>MatterSupply ~ Code Challenge</title>
      <link rel={'icon'} href={'/favicon.ico'}/>
    </Head>

    <Main imageUrl={'/images/main.png'}>
      <Intro/>
      <Posts/>
      <Post/>
    </Main>
  </>);
};

export default Home;
