import { useEffect, useState } from 'react';
import styles from './GameList.module.css';
import Game from '../Game/Game';
import { GameProps } from '../Game/Game';
import fetchMultipleGames from '../../utils/fetchMultipleGames';

export default function GameList() {
  const [games, setGames] = useState<null | GameProps[]>(null);

  useEffect(() => {
    async function getGames() {
      const gameData = await fetchMultipleGames([
        '1941',
        '1',
        '15',
        '20',
        '30',
      ]);
      setGames(gameData);
    }

    getGames();
  }, []);

  let content;

  if (!games) {
    content = <p>No games</p>;
  } else {
    content = games?.map((game) => (
      <Game
        key={game.key}
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
    <div>
      <div className={styles.container}>{content}</div>
    </div>
  );
}
