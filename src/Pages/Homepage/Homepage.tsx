import Button from '../../components/Button/Button';
import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';
import Game from '../../components/Game/Game';
import fetchGameInfo from '../../utils/fetchAPI';
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
      <Game />
    </>
  );
}
