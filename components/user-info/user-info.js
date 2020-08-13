import { useContext } from 'react';
import { AppContext } from '@components/app-context';
import styles from './user-info.module.css';

const UserInfo = () => {
  const { username, userData, setSelectedPost } = useContext(AppContext);
  if (!userData) return (<></>);

  const goBack = () => {
    setSelectedPost('');
    // window.scroll({ top: 0 });
  };

  return (<div className={styles.userinfo}>
    <a
      className={styles.image}
      href={`https://github.com/${username}`}
      target={'_blank'} rel={'noopener noreferrer'}>
      <img src={userData.photo || `https://unavatar.now.sh/github/${username}`} alt={username}/>
    </a>
    <div className={styles.details}>
      <h5>{userData.name || 'Unknown'}</h5>
      <button onClick={goBack}>Posts</button>
    </div>
  </div>);
};

export default UserInfo;
