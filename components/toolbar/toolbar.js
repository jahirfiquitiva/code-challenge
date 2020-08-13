import Link from 'next/link';
import MatterSupply from './ms.svg';
import styles from './toolbar.module.css';

const Toolbar = () => {
  return (<div className={styles.toolbar}>
    <div className={styles.container}>
      <Link href={'/'}>
        <a>
          <MatterSupply/>
        </a>
      </Link>
      <div className={styles.profile}>
        <img src={'https://unavatar.now.sh/jahirfiquitiva'} alt={'Photo'}
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
