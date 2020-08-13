import { createContext } from 'react';
import Search from '@components/posts/search/search';
import List from '@components/posts/list/list';

const PostsContext = createContext('posts');

const Posts = () => {
  const username = 'octocat';

  return (<PostsContext.Provider value={{ username }}>
    <Search/>
    <List/>
  </PostsContext.Provider>);
};

export { PostsContext };
export default Posts;
