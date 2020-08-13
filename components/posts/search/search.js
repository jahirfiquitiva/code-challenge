import { useContext, useState } from 'react';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';
import styles from './search.module.css';
import { AppContext } from '@components/app-context';

const Search = () => {
  const { username, dispatchUserName } = useContext(AppContext);
  const [usernameInInput, setUsernameInInput] = useState(username || '');

  const setUserName = () => {
    dispatchUserName({ type: 'set', payload: usernameInInput });
  };

  const onKeyPressed = (e) => {
    if (e.key.toString().toLowerCase() === 'enter') {
      setUserName();
    }
  };

  return (<div className={styles.search}>
    <div className={styles.field}>
      <Icon path={mdiMagnify} size={1}/>
      <input
        type={'text'} placeholder={'Username'} autoComplete={'off'}
        onKeyDown={onKeyPressed}
        value={usernameInInput}
        onChange={(e) => setUsernameInInput(e.target.value.toString())}/>
    </div>
    <button onClick={setUserName}>Search</button>
  </div>);
};

export default Search;
