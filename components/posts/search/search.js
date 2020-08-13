import styles from './search.module.css';
import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const Search = () => {
  return (<div className={styles.search}>
    <div className={styles.field}>
      <Icon path={mdiMagnify} size={1}/>
      <input type={'text'} placeholder={'Username'}/>
    </div>
    <button>Search</button>
  </div>);
};

export default Search;
