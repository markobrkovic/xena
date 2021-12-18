import { Link } from 'react-router-dom';
import styles from './Dropdown.module.css';

export default function Dropdown() {
  return (
    <div className={styles.dropdown}>
      <input
        type="checkbox"
        className={styles['dropdown__checkbox']}
        id="navi-toggle"
      />
      <label htmlFor="navi-toggle" className={styles['dropdown__button']}>
        <span className={styles['dropdown__icon']}>&nbsp;</span>
      </label>
      <div className={styles['dropdown__background']}>&nbsp;</div>
      <nav className={styles['dropdown__nav']}>
        <ul className={styles['dropdown__list']}>
          <li className={styles['dropdown__item']}>
            <Link className={styles['dropdown__link']} to={'/homepage'}>
              Homepage
            </Link>
          </li>
          <li className={styles['dropdown__item']}>
            <Link className={styles['dropdown__link']} to={'/wishlist'}>
              Wishlist
            </Link>
          </li>
          <li className={styles['dropdown__item']}>
            <Link className={styles['dropdown__link']} to={'/friends'}>
              Friends
            </Link>
          </li>
          <li className={styles['dropdown__item']}>
            <Link className={styles['dropdown__link']} to={'/profile'}>
              Profile
            </Link>
          </li>
          <li className={styles['dropdown__item']}>
            <Link className={styles['dropdown__link']} to={'/login'}>
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
