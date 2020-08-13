import styles from './main.module.css';

const Main = ({ imageUrl, children }) => {
  return (<main className={styles.fullheight}>
    <div className={styles.backgroundcontainer}>
      <img src={imageUrl}/>
    </div>
    {children}
  </main>);
};

export default Main;
