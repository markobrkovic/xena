import Button from '../../components/Button/Button';
import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';
import GameList from '../../components/GameList/GameList';
import fetchGameInfo from '../../utils/fetchGame';
import styles from './Homepage.module.css';

export default function Homepage(): JSX.Element {
  const game = fetchGameInfo('1942');
  console.log(game);

  return (
    <>
      <Button
        className={styles.goBackButton}
        text="Go Back"
        color="text"
        backgroundColor="primary"
        size="medium"
      />
      <h2 className={styles.headline}>Featured</h2>
      <FeaturedGame />
      <h2 className={styles.headline}>All Games</h2>
      <GameList />
    </>
  );
}
