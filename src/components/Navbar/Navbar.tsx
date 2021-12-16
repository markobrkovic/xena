import Button from '../Button/Button';
import styles from './Navbar.module.css';

export type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <Button
        className={styles.backButton}
        color="text"
        backgroundColor="primary"
        text="Back"
        size="medium"
      />
      <h2 className={styles.pageTitle}>{title}</h2>
    </nav>
  );
}
