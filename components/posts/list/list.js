import { useContext } from 'react';
import PropTypes from 'prop-types';
import { PostsContext } from '@components/posts/posts';
import styles from './list.module.css';

const List = ({ loading = true }) => {
  const { username, userData } = useContext(PostsContext);

  if (!username || username.length <= 0) return (<></>);

  const renderUserInfo = () => {
    if (!userData) return (<></>);
    if (loading) return (<p>Cargando información…</p>);
    return (<div className={styles.userinfo}>
      <a
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

  return (<div className={styles.postslist}>
    {renderUserInfo()}
    <ul>
      <li>Post 1</li>
      <li>Post 2</li>
    </ul>
  </div>);
};

List.propTypes = {
  loading: PropTypes.bool,
};

export default List;
