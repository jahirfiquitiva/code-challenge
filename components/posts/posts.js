import { createContext, useContext, useMemo, useState } from 'react';
import { SinglePostContext } from '@components/single-post-context';
import Search from '@components/posts/search/search';
import List from '@components/posts/list/list';

const PostsContext = createContext('posts');

const Posts = () => {
  const { username } = useContext(SinglePostContext);
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState(null);

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
      if (data && data.id) {
        internalSetUserData({
          name: data.name || username,
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
    userData,
  };

  return (<PostsContext.Provider value={sharedData}>
    <Search/>
    <List loading={loading}/>
  </PostsContext.Provider>);
};

export { PostsContext };
export default Posts;
