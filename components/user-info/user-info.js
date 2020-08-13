import { useContext } from 'react';
import { AppContext } from '@components/app-context';
import styles from './user-info.module.css';

const UserInfo = () => {
  const { username, userData } = useContext(AppContext);
  if (!userData) return (<></>);

  return (<div className={styles.userinfo}>
    <a
      className={styles.image}
      href={`https://github.com/${username}`}
      target={'_blank'} rel={'noopener noreferrer'}>
      <img src={userData.photo || `https://unavatar.now.sh/github/${username}`} alt={username}/>
    </a>
    <div className={styles.details}>
      <h5>{userData.name || 'Unknown'}</h5>
      <a
        href={`https://gist.github.com/${username}`}
        target={'_blank'} rel={'noopener noreferrer'}>
        Posts
      </a>
    </div>
  </div>);
};

export default UserInfo;
