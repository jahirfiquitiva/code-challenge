import styles from './main.module.css';
import Toolbar from '@components/toolbar/toolbar';

const Main = ({ imageUrl, children }) => {
  return (<main className={styles.fullheight}>
    <div className={styles.backgroundcontainer}>
      <img src={imageUrl}/>
    </div>
    <div className={styles.content}>
      <Toolbar/>
      <div className={styles.actualcontent}>
        <div>
          {children}
        </div>
      </div>
    </div>
  </main>);
};

export default Main;
