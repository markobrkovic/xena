import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';
import GameList from '../../components/GameList/GameList';
import Navbar from '../../components/Navbar/Navbar';
import styles from './Homepage.module.css';

export default function Homepage(): JSX.Element {
  let headlineOne;
  let headlineTwo;

  setTimeout(() => {
    headlineOne = <h2 className={styles.headline}>Featured</h2>;
    headlineTwo = <h2 className={styles.headline}>Other Games</h2>;
    console.log('finished');
  }, 500);

  return (
    <div className={styles.container}>
      <Navbar title="Homepage" />
      {headlineOne}
      <FeaturedGame />
      {headlineTwo}
      <GameList />
    </div>
  );
}
