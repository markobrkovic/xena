import { useEffect, useState } from 'react';
import Game from '../../components/Game/Game';
import styles from './Wishlist.module.css';
import { GameProps } from '../../components/Game/Game';
import fetchWishlist from '../../utils/fetchWishlist';
import fetchMultipleGames from '../../utils/fetchMultipleGames';
import Button from '../../components/Button/Button';

export default function Wishlist() {
  const [games, setGames] = useState<null | GameProps[]>(null);

  useEffect(() => {
    async function getName() {
      const userWishlist = await fetchWishlist({
        username: 'Marko',
      });
      console.log('this ' + userWishlist);
      const games = await fetchMultipleGames(userWishlist);
      console.log(games);
      setGames(games);
    }

    getName();
  }, []);

  let content;

  if (!games) {
    content = <p>No games</p>;
  } else {
    content = games?.map((game) => (
      <Game
        key={game.id}
        name={game.name}
        screenshots={game.screenshots}
        storyline={game.storyline}
        summary={game.summary}
        genres={game.genres}
        release_dates={game.release_dates}
      />
    ));
  }

  return (
    <div className={styles.container}>
      <nav className={styles.navbar}>
        <Button
          className={styles.goBack}
          text="Go Back"
          color="text"
          backgroundColor="primary"
          size="medium"
        />
        <h1 className={styles.pageTitle}>Wishlist</h1>
      </nav>
      {content}
    </div>
  );
}
