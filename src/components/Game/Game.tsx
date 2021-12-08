import { useEffect, useState } from 'react';
import styles from './Game.module.css';
import Image from '../Image/Image';
import Title from '../Title/Title';
import fetchGameInfo from '../../utils/fetchAPI';
import Line from '../design-components/Line/Line';
import Button from '../Button/Button';

type GameProps = {
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
  genres: [{ name: string }];
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
    <section className={styles.gameContainer}>
      <div>
        <Image
          className={styles.image}
          size="screenshot_med"
          image_id={`${game?.screenshots[0].image_id}`}
        />
        <Title
          className={styles.gameTitle}
          title={`${game?.name}`}
          size="h2"
          weight="light"
        />
      </div>
      <p className={styles.genre}>{game?.genres[0].name}</p>
      <p className={styles.description}>{game?.storyline.slice(0, 114)}...</p>
      <Line
        className={styles.lineOne}
        width="half"
        highestOpacityPoint="middle--secondary"
      />
      <Button
        className={styles.moreInfoBtn}
        text="See more"
        color="text"
        backgroundColor="transparent"
        size="medium"
      />
    </section>
  );
}
