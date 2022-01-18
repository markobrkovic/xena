import { useEffect, useState } from 'react';
import styles from './GameList.module.css';
import Game from '../Game/Game';
import { GameProps } from '../Game/Game';
import fetchMultipleGames from '../../utils/fetchMultipleGames';

export default function GameList() {
  const [games, setGames] = useState<null | GameProps[]>(null);

  useEffect(() => {
    async function getGames() {
      const games: number[] = [];
      for (let i = 0; i < 50; i++) {
        const value = Math.floor(Math.random() * 2000);
        if (!games.find((element) => element === value)) {
          games.push(value);
        } else {
          continue;
        }
      }
      const gameData = await fetchMultipleGames(games);
      setGames(gameData);
    }

    getGames();
  }, []);

  let content;

  if (!games) {
    content = <p>Loading...</p>;
  } else {
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
  }

  return <div className={styles.container}>{content}</div>;
}
