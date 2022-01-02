import { useEffect, useState } from 'react';
import Game, { GameProps } from '../../components/Game/Game';
import GameList from '../../components/GameList/GameList';
import Navbar from '../../components/Navbar/Navbar';
import SearchInput from '../../components/SearchInput/SearchInput';
import fetchSearch from '../../utils/fetchSearch';
import styles from './Homepage.module.css';

export default function Homepage(): JSX.Element {
  const [search, setSearch] = useState<null | string>(null);
  const [games, setGames] = useState<null | GameProps[]>(null);

  let content;
  useEffect(() => {
    async function load() {
      const newGames = await fetchSearch(search);
      setGames(newGames);
    }
    load();
  }, [search]);

  if (search) {
    content = games?.map((game) => (
      <Game
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
    content = (
      <div className={styles.gameContainer}>
        <GameList />
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <Navbar title="Homepage" />
      <SearchInput className={styles.searchInput} onSearch={setSearch} />
      {content}
    </div>
  );
}
