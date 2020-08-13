import { createContext, useMemo, useReducer, useState } from 'react';

const AppContext = createContext('app-context');

const userNameReducer = (data, action) => {
  if (action.type === 'set') return action.payload;
  return data;
};

const AppContextProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState('');
  const [username, dispatchUserName] = useReducer(userNameReducer, '');

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
    selectedPost,
    setSelectedPost,
    username,
    dispatchUserName,
    userData,
    loading,
  };

  return (<AppContext.Provider value={sharedData}>
    {children}
  </AppContext.Provider>);
};

export { AppContext };
export default AppContextProvider;
