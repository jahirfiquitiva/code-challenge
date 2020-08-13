import { useContext, useMemo } from 'react';
import { AppContext } from '@components/app-context';
import Toolbar from '@components/toolbar/toolbar';
import Post from '@components/post/post';
import styles from './main.module.css';

const Main = ({ imageUrl, postImageUrl, children }) => {
  const { selectedPost } = useContext(AppContext);

  useMemo(() => {
    if (!selectedPost || selectedPost.length <= 0) return;
    window.scroll({ top: 0 });
  }, [selectedPost]);

  const renderPost = () => {
    if (!selectedPost || selectedPost.length <= 0) return (<></>);
    return (<Post/>);
  };

  const renderChildren = () => {
    if (!selectedPost || selectedPost.length <= 0) return children;
    return (<></>);
  };

  return (<main className={styles.fullheight}>
    <div className={styles.backgroundcontainer}>
      <img src={(!selectedPost || selectedPost.length <= 0) ? imageUrl : postImageUrl}/>
    </div>
    <div className={styles.content}>
      <Toolbar/>
      <div className={styles.actualcontent}>
        <div className={styles.first}>
          {renderChildren()}
          {renderPost()}
        </div>
      </div>
    </div>
  </main>);
};

export default Main;
