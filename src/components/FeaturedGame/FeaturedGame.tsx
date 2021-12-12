import { useEffect, useState } from 'react';
import styles from './FeaturedGame.module.css';
import Image from '../Image/Image';
import Title from '../Title/Title';
import fetchGameInfo from '../../utils/fetchGame';
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
      const gameData = await fetchGameInfo('1942');
      console.log(gameData);
      setGame(gameData);
    }

    getName();
  }, []);

  let summary;

  if (game?.storyline) {
    summary = <p className={styles.description}>{game?.storyline}</p>;
  } else if (game?.summary) {
    summary = <p className={styles.description}>{game?.summary}</p>;
  } else {
    summary = <p className={styles.description}>{'No story'}</p>;
  }

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
      {summary}
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
