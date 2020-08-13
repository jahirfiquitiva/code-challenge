import Head from 'next/head';
import Main from '@components/main/main';
import Intro from '@components/intro/intro';
import Posts from '@components/posts/posts';
import SinglePostProvider from '@components/single-post-context';

const Home = () => {
  return (<>
    <Head>
      <title>MatterSupply ~ Code Challenge</title>
      <link rel={'icon'} href={'/favicon.ico'}/>
    </Head>

    <SinglePostProvider>
      <Main imageUrl={'/images/main.png'} postImageUrl={'/images/post.png'}>
        <Intro/>
        <Posts/>
      </Main>
    </SinglePostProvider>
  </>);
};

export default Home;
