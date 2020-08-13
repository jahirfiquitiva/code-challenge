import { useContext } from 'react';
import Link from 'next/link';
import { SinglePostContext } from '@components/single-post-context';
import MatterSupply from './ms.svg';
import styles from './toolbar.module.css';

const Toolbar = () => {
  const { selectedPost, setSelectedPost } = useContext(SinglePostContext);

  const togglePost = () => {
    if (selectedPost && selectedPost.length > 0) setSelectedPost('');
  };

  return (<div className={styles.toolbar}>
    <div className={styles.container}>
      <button className={styles.logo} onClick={togglePost}>
        <MatterSupply/>
      </button>
      <div className={styles.profile}>
        <img src={'https://unavatar.now.sh/github/jahirfiquitiva'} alt={'Photo'}
             className={styles.avatar}/>
        <Link href={'/logout'}>
          <a className={'underlined'}>
            Log out
          </a>
        </Link>
      </div>
    </div>
  </div>);
};

export default Toolbar;
