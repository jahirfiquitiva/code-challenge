import { createContext, useReducer } from 'react';
import Search from '@components/posts/search/search';
import List from '@components/posts/list/list';

const PostsContext = createContext('posts');

const userNameReducer = (data, action) => {
  if (action.type === 'set') return action.payload;
  return data;
};

const Posts = () => {
  const [username, dispatchUserName] = useReducer(userNameReducer, '');

  return (<PostsContext.Provider value={{ username, dispatchUserName }}>
    <Search/>
    <List/>
  </PostsContext.Provider>);
};

export { PostsContext };
export default Posts;
