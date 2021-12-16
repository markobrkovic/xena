import { useEffect, useState } from 'react';
import styles from './GameInfo.module.css';
import Image from '../../components/Image/Image';
import Button from '../../components/Button/Button';
import Title from '../../components/Title/Title';
import fetchGameInfo from '../../utils/fetchGameInfo';
import Line from '../../components/design-components/Line/Line';
import addToWishlist from '../../utils/addToWishlist';

type GameProps = {
  id?: number;
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
};

export default function GameInfo() {
  const [game, setGame] = useState<null | GameProps>(null);

  useEffect(() => {
    async function getName() {
      const gameData = await fetchGameInfo('1942');
      setGame(gameData);
    }

    getName();
  }, []);

  let summary;
  const username = 'Marko';

  if (game?.storyline) {
    summary = <p className={styles.description}>{game?.storyline}</p>;
  } else if (game?.summary) {
    summary = <p className={styles.description}>{game?.summary}</p>;
  } else {
    summary = <p className={styles.description}>{'No story'}</p>;
  }

  return (
    <div className={styles.container}>
      <Button
        className={styles.backButton}
        text="Go Back"
        color="text"
        backgroundColor="primary"
        size="small"
      />
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
            title={`Release Date: ${game?.release_dates[0].y}`}
            size="h4"
            weight="thin"
          />
        </div>
        <button
          onClick={async () => {
            await addToWishlist({ username, gameId: game?.id });
          }}
          className={styles.addToWishlist}
        >
          Add to Wishlist
        </button>
      </section>
      <Title
        className={styles.gameSectionsTitle}
        title="About this game"
        size="h3"
        weight="thin"
      />
      <Line width="half" highestOpacityPoint="start" />
      {summary}
    </div>
  );
}
