import { useContext, useState } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { PostsContext } from '@components/posts/posts';
import styles from './search.module.css';

const Search = () => {
  const { username, dispatchUserName } = useContext(PostsContext);
  const [usernameInInput, setUsernameInInput] = useState(username || '');

  const setUserName = () => {
    dispatchUserName({ type: 'set', payload: usernameInInput });
  };

  return (<div className={styles.search}>
    <div className={styles.field}>
      <Icon path={mdiMagnify} size={1}/>
      <input
        type={'text'} placeholder={'Username'}
        value={usernameInInput}
        onChange={(e) => setUsernameInInput(e.target.value.toString())}/>
    </div>
    <button onClick={setUserName}>Search</button>
  </div>);
};

export default Search;
