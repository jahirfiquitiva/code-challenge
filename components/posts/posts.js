import { createContext, useMemo, useReducer, useState } from 'react';
import Search from '@components/posts/search/search';
import List from '@components/posts/list/list';

const PostsContext = createContext('posts');

const userNameReducer = (data, action) => {
  if (action.type === 'set') return action.payload;
  return data;
};

const Posts = () => {
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);
  const [username, dispatchUserName] = useReducer(userNameReducer, '');

  const internalSetUserData = (data) => {
    setLoading(false);
    setUserData(data);
  };

  const getUserInfo = async () => {
    if (loading) return;
    internalSetUserData(null);
    if (!username || username.length <= 0) {
      return;
    }
    setLoading(true);
    try {
      const request = await fetch(`https://api.github.com/users/${username}`);
      const data = await request.json();
      console.table(data);
      if (data && data.name) {
        internalSetUserData({
          name: data.name,
          photo: data.avatar_url,
        });
      } else {
        internalSetUserData(
          { error: data ? data.message || 'Unexpected error' : 'Unexpected error' });
      }
    } catch (e) {
      internalSetUserData(null);
    }
  };

  useMemo(() => {
    getUserInfo()
      .catch(() => {
        internalSetUserData(null);
      });
  }, [username]);

  const sharedData = {
    username,
    dispatchUserName,
    userData,
  };

  return (<PostsContext.Provider value={sharedData}>
    <Search/>
    <List loading={loading}/>
  </PostsContext.Provider>);
};

export { PostsContext };
export default Posts;
