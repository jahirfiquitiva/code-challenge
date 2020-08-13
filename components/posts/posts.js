import { useContext } from 'react';
import { AppContext } from '@components/app-context';
import Search from '@components/posts/search/search';
import List from '@components/posts/list/list';

const Posts = () => {
  const { loading } = useContext(AppContext);
  return (<>
    <Search/>
    <List loading={loading}/>
  </>);
};

export default Posts;
