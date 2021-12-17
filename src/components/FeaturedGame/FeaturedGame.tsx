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
  let summary;

  if (game?.storyline) {
    summary = game?.storyline;
  } else if (game?.summary) {
    summary = game?.summary;
  } else {
    summary = 'No story';
  }

  let content;

  if (!game) {
    content = <p>Loading...</p>;
  } else {
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
        <p className={styles.description}>{summary}</p>
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
