import { useEffect, useState } from 'react';
import styles from './Wishlist.module.css';
import { GameProps } from '../../components/Game/Game';
import fetchWishlist from '../../utils/fetchWishlist';
import fetchMultipleGames from '../../utils/fetchMultipleGames';
import Navbar from '../../components/Navbar/Navbar';
import GameWishlist from '../../components/GameWishlist/GameWishlist';
import SearchInput from '../../components/SearchInput/SearchInput';

export default function Wishlist() {
  const [games, setGames] = useState<null | GameProps[]>(null);
  const user = localStorage.getItem('username');

  useEffect(() => {
    async function getName() {
      const userWishlist = await fetchWishlist({
        username: user,
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
    content = (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingIcon}></div>
      </div>
    );
  } else {
    content = games?.map((game) => (
      <GameWishlist
        key={game.id}
        id={game.id}
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
      <Navbar title="Wishlist" />
      <div className={styles.wishlistContainer}>
        <SearchInput
          text="Search by name"
          className={styles.searchInput}
          onSearch={function (title: string): void {
            throw new Error('Function not implemented.');
          }}
        />
        {content}
      </div>
    </div>
  );
}
