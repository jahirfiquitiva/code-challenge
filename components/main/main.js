import styles from './main.module.css';
import Toolbar from '@components/toolbar/toolbar';
import SinglePostProvider from '@components/single-post-context';

const Main = ({ imageUrl, children }) => {
  return (<SinglePostProvider>
    <main className={styles.fullheight}>
      <div className={styles.backgroundcontainer}>
        <img src={imageUrl}/>
      </div>
      <div className={styles.content}>
        <Toolbar/>
        <div className={styles.actualcontent}>
          <div className={styles.first}>
            {children}
          </div>
        </div>
      </div>
    </main>
  </SinglePostProvider>);
};

export default Main;
