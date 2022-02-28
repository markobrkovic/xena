import { useEffect, useState } from 'react';
import styles from './Wishlist.module.css';
import { GameProps } from '../../components/Game/Game';
import fetchWishlist from '../../utils/fetchWishlist';
import fetchMultipleGames from '../../utils/fetchMultipleGames';
import Navbar from '../../components/Navbar/Navbar';
import GameWishlist from '../../components/GameWishlist/GameWishlist';
import SearchInput from '../../components/SearchInput/SearchInput';
import Button from '../../components/Button/Button';

export default function Wishlist() {
  const [search, setSearch] = useState<null | string>(null);
  const [games, setGames] = useState<null | GameProps[]>(null);
  const user = localStorage.getItem('username');

  useEffect(() => {
    async function getGames() {
      const userWishlist = await fetchWishlist({
        username: user,
      });
      if (userWishlist.length > 0) {
        console.log('DAAAA ' + userWishlist);
        const games = await fetchMultipleGames(userWishlist);
        setGames(games);
      } else {
        setGames([]);
      }
    }

    getGames();
  }, [search]);

  let content;

  if (!games) {
    content = (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingIcon}></div>
      </div>
    );
  } else if (games.length < 1) {
    content = <p className={styles.emptyWishlist}>Your wishlist is empty</p>;
  } else if (search) {
    if (games.filter((game) => game.name.includes(search))) {
      const searched = games.filter((game) =>
        game.name.toLowerCase().includes(search.toLowerCase())
      );
      content = searched?.map((game) => (
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
    } else {
      content = <p>Oops, nothing found</p>;
    }
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
        <div className={styles.searchAndFilter}>
          <SearchInput
            text="Search by name"
            className={styles.searchInput}
            onSearch={setSearch}
          />
          <Button
            className={styles.filterButton}
            text={'Filter by'}
            color={'text'}
            backgroundColor={'secondary'}
            size={'small'}
          />
        </div>
        {content}
      </div>
    </div>
  );
}
