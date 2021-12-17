import styles from './Navbar.module.css';

export type NavbarProps = {
  title: string;
};

export default function Navbar({ title }: NavbarProps) {
  return (
    <nav className={styles.navbar}>
      <h2 className={styles.pageTitle}>{title}</h2>
    </nav>
  );
}
