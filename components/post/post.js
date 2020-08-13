import { useContext } from 'react';
import ReactMarkdown from 'react-markdown';
import useSWR from 'swr';
import { AppContext } from '@components/app-context';
import UserInfo from '@components/user-info/user-info';
import fetcher from '@utils/fetcher';
import styles from './post.module.css';

const Post = () => {
  const { selectedPost: selectedPostId } = useContext(AppContext);
  if (!selectedPostId || selectedPostId.length <= 0) return (<></>);
  const { data } = useSWR(`https://api.github.com/gists/${selectedPostId}`, fetcher);
  if (!data) return (<p>Loading…</p>);

  let content = '';
  try {
    const filesNames = Object.keys(data.files);
    const file = data.files[filesNames[0]];
    // eslint-disable-next-line prefer-destructuring
    content = file.content;
  } catch (e) {
  }

  return (<div className={styles.post}>
    <div className={styles.actualpost}>
      <ReactMarkdown source={content}/>
    </div>
    <UserInfo/>
  </div>);
};

export default Post;
