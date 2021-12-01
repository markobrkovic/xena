import { useEffect, useState } from 'react';
import styles from './Game.module.css';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import fetchGameInfo from '../../utils/fetchAPI';

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
      const gameData = await fetchGameInfo();
      setGame(gameData);
    }

    getName();
  }, []);

  return (
    <div className={styles.container}>
      <Image
        className={styles.image}
        size="screenshot_med"
        image_id={`${game?.screenshots[0].image_id}`}
      />
      <Title title={`${game?.name}`} />
      <p className={styles.description}>{game?.storyline}</p>
    </div>
  );
}
