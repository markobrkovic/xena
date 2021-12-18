import { useEffect, useState } from 'react';
import styles from './FeaturedGame.module.css';
import Image from '../Image/Image';
import Title from '../Title/Title';
import fetchGameInfo from '../../utils/fetchGameInfo';
import Line from '../design-components/Line/Line';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';

type FeaturedGameProps = {
  id?: number;
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
      setGame(gameData);
    }

    getName();
  }, []);

  const navigate = useNavigate();
  let story;
  let content;

  if (!game) {
    console.log('Fetching...');
  } else {
    if (game?.storyline) {
      story = (
        <p className={styles.description}>
          {game?.storyline.length > 100
            ? game?.storyline.slice(0, 100)
            : game?.storyline}
          ...
        </p>
      );
    } else if (game?.summary) {
      story = <p className={styles.description}>{game?.summary}...</p>;
    } else {
      story = <p className={styles.description}>{'No story'}</p>;
    }
    content = (
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
        <p className={styles.description}>{story}</p>
        <Line
          className={styles.lineOne}
          width="half"
          highestOpacityPoint="middle--secondary"
        />
        <Button
          onClick={() => navigate(`/game/${game.id}`)}
          className={styles.moreInfoBtn}
          text="See more"
          color="text"
          backgroundColor="transparent"
          size="medium"
        />
      </section>
    );
  }

  return <>{content}</>;
}
