import { useEffect, useState } from 'react';
import styles from './FeaturedGame.module.css';
import Image from '../Image/Image';
import Title from '../Title/Title';
import fetchGameInfo from '../../utils/fetchAPI';
import Line from '../design-components/Line/Line';
import Button from '../Button/Button';

type FeaturedGameProps = {
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
};

export default function FeaturedGame() {
  const [game, setGame] = useState<null | FeaturedGameProps>(null);

  useEffect(() => {
    async function getName() {
      const gameData = await fetchGameInfo();
      setGame(gameData);
    }

    getName();
  }, []);

  return (
    <section className={styles.featuredGameContainer}>
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
      <p className={styles.description}>{game?.summary}</p>
      <Line
        className={styles.lineOne}
        width="half"
        highestOpacityPoint="middle--secondary"
      />
      <Button
        className={styles.moreInfoBtn}
        text="More Info"
        color="text"
        backgroundColor="transparent"
        size="medium"
      />
    </section>
  );
}
