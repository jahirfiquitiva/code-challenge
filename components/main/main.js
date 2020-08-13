import styles from './main.module.css';

const Main = ({ imageUrl, children }) => {
  return (<main className={styles.fullheight}>
    <div className={styles.backgroundcontainer}>
      <img src={imageUrl}/>
    </div>
    <div className={styles.content}>
      {children}
    </div>
  </main>);
};

export default Main;
