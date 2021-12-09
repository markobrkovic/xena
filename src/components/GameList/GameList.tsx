import { useEffect, useState } from 'react';
import styles from './GameList.module.css';
import Image from '../Image/Image';
import Button from '../Button/Button';
import Title from '../Title/Title';
import fetchGameInfo from '../../utils/fetchAPI';
import Line from '../design-components/Line/Line';
import Game from '../Game/Game';

type GameProps = [
  {
    name: string;
    category: string;
    screenshots: [
      {
        image_id: string;
      }
    ];
    release_dates: [
      {
        y: number;
      }
    ];
    storyline: string;
    summary: string;
  }
];

export default function GameList() {
  const [games, setGames] = useState<null | GameProps[]>(null);

  useEffect(() => {
    async function getGames() {
      const gameData = await fetchGameInfo('1942');
      setGames(gameData);
    }

    getGames();
  }, []);

  return <Game />;
}
