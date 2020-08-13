import Head from 'next/head';
import Main from '@components/main/main';
import Intro from '@components/intro/intro';
import Posts from '@components/posts/posts';
import AppContextProvider from '@components/app-context';

const Home = () => {
  return (<>
    <Head>
      <title>MatterSupply ~ Code Challenge</title>
      <link rel={'icon'} href={'/favicon.ico'}/>
    </Head>

    <AppContextProvider>
      <Main imageUrl={'/images/main.png'} postImageUrl={'/images/post.png'}>
        <Intro/>
        <Posts/>
      </Main>
    </AppContextProvider>
  </>);
};

export default Home;
