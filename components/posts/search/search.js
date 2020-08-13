import { useContext, useState } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import { PostsContext } from '@components/posts/posts';
import styles from './search.module.css';
import { SinglePostContext } from '@components/single-post-context';

const Search = () => {
  const { username, dispatchUserName } = useContext(SinglePostContext);
  const [usernameInInput, setUsernameInInput] = useState(username || '');

  const setUserName = () => {
    dispatchUserName({ type: 'set', payload: usernameInInput });
  };

  return (<div className={styles.search}>
    <div className={styles.field}>
      <Icon path={mdiMagnify} size={1}/>
      <input
        type={'text'} placeholder={'Username'} autoComplete={'off'}
        value={usernameInInput}
        onChange={(e) => setUsernameInInput(e.target.value.toString())}/>
    </div>
    <button onClick={setUserName}>Search</button>
  </div>);
};

export default Search;
