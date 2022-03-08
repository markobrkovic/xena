import { useNavigate } from 'react-router-dom';
import styles from './Welcome.module.css';

export default function Welcome(): JSX.Element {
  const navigate = useNavigate();

  function handleClick(param: string) {
    navigate(param);
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to XENA</h1>
      <div className={styles.btnContainer}>
        <button className={styles.btn} onClick={() => handleClick('/homepage')}>
          explore
        </button>
        <button className={styles.btn} onClick={() => handleClick('/wishlist')}>
          wishlist
        </button>
        <button className={styles.btn} onClick={() => handleClick('/friends')}>
          friends
        </button>
        <button className={styles.btn} onClick={() => handleClick('/profile')}>
          profile
        </button>
      </div>
    </div>
  );
}
