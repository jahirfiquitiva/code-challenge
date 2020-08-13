import { createContext, useReducer, useState } from 'react';

const userNameReducer = (data, action) => {
  if (action.type === 'set') return action.payload;
  return data;
};

const SinglePostContext = createContext('single-post');

const SinglePostProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState('');
  const [username, dispatchUserName] = useReducer(userNameReducer, '');

  const sharedData = {
    selectedPost,
    setSelectedPost,
    username,
    dispatchUserName,
  };

  return (<SinglePostContext.Provider value={sharedData}>
    {children}
  </SinglePostContext.Provider>);
};

export { SinglePostContext };
export default SinglePostProvider;
