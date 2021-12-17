import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';
import GameList from '../../components/GameList/GameList';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Homepage.module.css';

export default function Homepage(): JSX.Element {
  return (
    <div className={styles.container}>
      <Navbar title="Homepage" />
      <h2 className={styles.headline}>Featured</h2>
      <FeaturedGame />
      <h2 className={styles.headline}>Other Games</h2>
      <GameList />
    </div>
  );
}
