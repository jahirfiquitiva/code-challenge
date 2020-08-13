import { useContext } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { PostsContext } from '@components/posts/posts';
import Loading from '@components/loading/loading';
import fetcher from '@utils/fetcher';
import formatDate from '@utils/formatDate';
import calculateTimeAgo from '@utils/calculateTimeAgo';
import styles from './list.module.css';

const List = ({ loading = true }) => {
  const { username, userData } = useContext(PostsContext);
  const { data } = useSWR(`https://api.github.com/users/${username}/gists`, fetcher);

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
    if (!loading && data) {
      return (<ul>
        {(data || []).map((it, i) => {
          const title = it.description || it.files ? Object.keys(it.files)[0] : 'Unknown';
          const postDate = new Date(it.updated_at);
          return (<li key={i}>
            <a href={it.html_url} target={'_blank'} rel={'noopener noreferrer'}>
              <div className={styles.post}>
                <div>
                  <p className={styles.date}>
                    {formatDate(postDate)}&nbsp;&nbsp;•
                    &nbsp;<span>~{calculateTimeAgo(postDate)} months ago</span>
                  </p>
                  <p className={styles.title}>{title}</p>
                </div>
                <span className={styles.read}>Read</span>
              </div>
            </a>
          </li>);
        })}
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
