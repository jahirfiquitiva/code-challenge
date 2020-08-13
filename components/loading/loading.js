import Icon from '@mdi/react';
import { mdiLoading } from '@mdi/js';
import styles from './loading.module.css';

const Loading = ({ text, show }) => {
  if (!show) return (<></>);
  return (<div className={styles.loading}>
    <Icon path={mdiLoading} size={1}/>
    {text && text.length > 0 && (<p>{text}</p>)}
  </div>);
};

export default Loading;
