import { useContext } from 'react';
import { PostsContext } from '@components/posts/posts';
import styles from './list.module.css';

const List = () => {
  const { username } = useContext(PostsContext);
  console.log(username);

  if (!username || username.length <= 0) return (<></>);

  return (<div className={styles.postslist}>
    <div className={styles.userinfo}>
      <img src={`https://unavatar.now.sh/github/${username}`} alt={username}/>
    </div>
    <ul>
      <li>Post 1</li>
      <li>Post 2</li>
    </ul>
  </div>);
};

export default List;
