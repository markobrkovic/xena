import { useEffect, useState } from 'react';
import Game from '../../components/Game/Game';
import fetchGameInfo from '../../utils/fetchGame';
import styles from './Wishlist.module.css';
import { GameProps } from '../../components/Game/Game';
import fetchWishlist from '../../utils/fetchWishlist';

export default function Wishlist() {
  const [game, setGame] = useState<null | GameProps>(null);

  useEffect(() => {
    async function getName() {
      const wishlistGame = await fetchWishlist({
        username: 'Marko',
        gameId: 1942,
      });
      const gameData = await fetchGameInfo(wishlistGame);
      setGame(gameData);
    }

    getName();
  }, []);

  let content;

  if (!game) {
    content = <p>No games</p>;
  } else {
    content = (
      <Game
        key={game.key}
        name={game.name}
        screenshots={game.screenshots}
        storyline={game.storyline}
        summary={game.summary}
        genres={game.genres}
        release_dates={game.release_dates}
      />
    );
  }

  return (
    <div className={styles.container}>
      <h1>Wishlist</h1>
      {content}
    </div>
  );
}
