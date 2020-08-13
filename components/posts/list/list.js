import { useContext } from 'react';
import PropTypes from 'prop-types';
import useSWR from 'swr';
import { AppContext } from '@components/app-context';
import Loading from '@components/loading/loading';
import UserInfo from '@components/user-info/user-info';
import fetcher from '@utils/fetcher';
import formatDate from '@utils/formatDate';
import calculateTimeAgo from '@utils/calculateTimeAgo';
import styles from './list.module.css';

const List = ({ loading = true }) => {
  const { username, setSelectedPost, userData } = useContext(AppContext);
  const { data } = username && username.length > 0
    ? useSWR(`https://api.github.com/users/${username}/gists`, fetcher)
    : {};

  if (!username || username.length <= 0) return (<></>);

  const selectPost = (id) => {
    setSelectedPost(id);
  };

  const renderUserInfo = () => {
    return loading ? (<></>) : (<UserInfo/>);
  };

  const renderPostContent = (title, postDate) => {
    return (<>
      <div>
        <p className={styles.date}>
          {formatDate(postDate)}&nbsp;&nbsp;•
          &nbsp;<span>~{calculateTimeAgo(postDate)} months ago</span>
        </p>
        <p className={styles.title}>{title}</p>
      </div>
      <span className={styles.read}>Read</span>
    </>);
  };

  const renderUserPosts = () => {
    if (!loading && data) {
      return (<ul>
        {(data || []).map((it, i) => {
          const title = it.description || it.files ? Object.keys(it.files)[0] : 'Unknown';
          const filesCount = it.files ? Object.keys(it.files).length || 0 : 0;
          const firstFile = (it.files ? Object.keys(it.files)[0] || '' : '').toString();
          const postDate = new Date(it.updated_at);
          if (filesCount === 1 && firstFile.toLowerCase().endsWith('.md')) {
            return (<li key={i}>
              <div className={styles.post} onClick={() => { selectPost(it.id); }}>
                {renderPostContent(title, postDate)}
              </div>
            </li>);
          } else {
            return (<li key={i}>
              <a href={it.html_url} target={'_blank'} rel={'noopener noreferrer'}>
                <div className={styles.post}>{renderPostContent(title, postDate)}</div>
              </a>
            </li>);
          }
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
