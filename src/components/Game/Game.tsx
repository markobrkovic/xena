import { useEffect, useState } from 'react';
import styles from './Game.module.css';
import Image from '../Image/Image';
import Title from '../Title/Title';
import fetchGameInfo from '../../utils/fetchAPI';
import Button from '../Button/Button';

type GameProps = {
  name: string;
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
  genres: [{ name: string }];
};

export default function Game() {
  const [game, setGame] = useState<null | GameProps>(null);

  useEffect(() => {
    async function getName() {
      const gameData = await fetchGameInfo('1942');
      setGame(gameData);
    }

    getName();
  }, []);

  let summary;

  if (game?.storyline) {
    summary = (
      <p className={styles.description}>{game?.storyline.slice(0, 100)}...</p>
    );
  } else if (game?.summary) {
    summary = (
      <p className={styles.description}>{game?.summary.slice(0, 100)}...</p>
    );
  } else {
    summary = <p className={styles.description}>{'No story'}</p>;
  }

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
      {summary}
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
