import { createContext, useState } from 'react';

const SinglePostContext = createContext('single-post');

const SinglePostProvider = ({ children }) => {
  const [selectedPost, setSelectedPost] = useState('');
  return (<SinglePostContext.Provider value={{ selectedPost, setSelectedPost }}>
    {children}
  </SinglePostContext.Provider>);
};

export { SinglePostContext };
export default SinglePostProvider;
