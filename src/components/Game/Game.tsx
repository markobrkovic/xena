import { useEffect, useState } from 'react';
import fetchGameName from '../../utils/fetchAPI';
import styles from './Game.module.css';
import Image from '../Image/Image';

type GameProps = {
  name: string;
  category: string;
  screenshots: [
    {
      image_id: string;
    }
  ];
  storyline: string;
};

export default function Game() {
  const [game, setGame] = useState<null | GameProps>(null);

  useEffect(() => {
    async function getName() {
      const gameData = await fetchGameName();
      setGame(gameData);
    }

    getName();
  }, []);

  return (
    <>
      <Image
        size="screenshot_med"
        image_id={`${game?.screenshots[0].image_id}`}
      />
      <p className={styles.text}>{game?.storyline}</p>
    </>
  );
}
