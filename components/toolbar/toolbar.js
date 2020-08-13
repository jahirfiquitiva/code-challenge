import { useContext } from 'react';
import Link from 'next/link';
import { AppContext } from '@components/app-context';
import MatterSupply from './ms.svg';
import styles from './toolbar.module.css';

const Toolbar = () => {
  const { selectedPost, setSelectedPost } = useContext(AppContext);

  const togglePost = () => {
    if (selectedPost && selectedPost.length > 0) setSelectedPost('');
  };

  return (<div className={styles.toolbar}>
    <div className={styles.container}>
      <button className={styles.logo} onClick={togglePost}>
        <MatterSupply/>
      </button>
      <div className={styles.profile}>
        <a
          className={styles.username}
          href={'https://github.com/jahirfiquitiva'}
          target={'_blank'} rel={'noopener noreferrer'}>
          <img src={'https://unavatar.now.sh/github/jahirfiquitiva'} alt={'Photo'}
               className={styles.avatar}/>
          <p>Jahir Fiquitiva</p>
        </a>
        <Link href={'/'}>
          <a className={'underlined'}>
            Log out
          </a>
        </Link>
      </div>
    </div>
  </div>);
};

export default Toolbar;
