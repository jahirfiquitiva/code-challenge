import { useContext } from 'react';
import PropTypes from 'prop-types';
import { PostsContext } from '@components/posts/posts';
import styles from './list.module.css';
import Loading from '@components/loading/loading';

const List = ({ loading = true }) => {
  const { username, userData } = useContext(PostsContext);

  if (!username || username.length <= 0) return (<></>);

  const renderUserInfo = () => {
    if (!loading && userData) {
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
    } else {
      return (<></>);
    }
  };

  const renderUserPosts = () => {
    if (!loading && userData) {
      return (<ul>
        <li>Post 1</li>
        <li>Post 2</li>
      </ul>);
    } else {
      return (<></>);
    }
  };

  const renderContent = () => {
    if (userData && userData.error) {
      return (<p>{userData.error}</p>);
    } else {
      return (<>
        <Loading text={'Loading…'} show={loading}/>
        {renderUserInfo()}
        {renderUserPosts()}
      </>);
    }
  };

  return (<div className={styles.postslist}>
    {renderContent()}
  </div>);
};

List.propTypes = {
  loading: PropTypes.bool,
};

export default List;
