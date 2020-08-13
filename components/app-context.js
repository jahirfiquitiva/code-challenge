import { createContext, useReducer, useState } from 'react';

const AppContext = createContext('app-context');

const userNameReducer = (data, action) => {
  if (action.type === 'set') return action.payload;
  return data;
};

const AppContextProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState('');
  const [username, dispatchUserName] = useReducer(userNameReducer, '');

  const sharedData = {
    selectedPost,
    setSelectedPost,
    username,
    dispatchUserName,
  };

  return (<AppContext.Provider value={sharedData}>
    {children}
  </AppContext.Provider>);
};

export { AppContext };
export default AppContextProvider;
