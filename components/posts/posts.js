import { createContext, useMemo, useReducer, useState } from 'react';
import Search from '@components/posts/search/search';
import List from '@components/posts/list/list';

const PostsContext = createContext('posts');

const userNameReducer = (data, action) => {
  if (action.type === 'set') return action.payload;
  return data;
};

const Posts = () => {
  const [userData, setUserData] = useState(null);
  const [username, dispatchUserName] = useReducer(userNameReducer, '');

  const getUserInfo = async () => {
    if (!username || username.length <= 0) {
      setUserData(null);
      return;
    }
    try {
      const request = await fetch(`https://api.github.com/users/${username}`);
      const data = await request.json();
      if (data.name) {
        setUserData({
          name: data.name,
          photo: data.avatar_url,
        });
      } else {
        setUserData(null);
      }
    } catch (e) {
      setUserData(null);
    }
  };

  useMemo(() => {
    if (!username || username.length <= 0) {
      setUserData(null);
    } else {
      getUserInfo()
        .catch(() => {
          setUserData(null);
        });
    }
  }, [username]);

  const sharedData = {
    username,
    dispatchUserName,
    userData,
  };

  return (<PostsContext.Provider value={sharedData}>
    <Search/>
    <List loading={userData === undefined || userData === null}/>
  </PostsContext.Provider>);
};

export { PostsContext };
export default Posts;
