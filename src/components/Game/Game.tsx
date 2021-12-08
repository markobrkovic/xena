import { useEffect, useState } from 'react';
import styles from './Game.module.css';
import Image from '../Image/Image';
import Title from '../Title/Title';
import fetchGameInfo from '../../utils/fetchAPI';
import Line from '../design-components/Line/Line';

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
      <section className={styles.gameOverview}>
        <Image
          className={styles.image}
          size="screenshot_med"
          image_id={`${game?.screenshots[0].image_id}`}
        />
        <div className={styles.gameInfoContainer}>
          <Title
            className={styles.gameTitle}
            title={`${game?.name}`}
            size="h2"
            weight="light"
          />
          <Title
            className={styles.releaseDateTitle}
            title={'Release Date: '}
            size="h4"
            weight="thin"
          />
          <span className={styles.releaseDate}>{game?.release_dates[0].y}</span>
          <Title
            className={styles.gameSectionsTitle}
            title="About this game"
            size="h3"
            weight="thin"
          />
          <Line
            className={styles.lineOne}
            width="half"
            highestOpacityPoint="start"
          />
          <p className={styles.description}>{game?.storyline}</p>
        </div>
      </section>
    </div>
  );
}
