import { useEffect, useState } from 'react';
import styles from './GameInfo.module.css';
import Image from '../../components/Image/Image';
import Title from '../../components/Title/Title';
import fetchGameInfo from '../../utils/fetchGameInfo';
import Line from '../../components/design-components/Line/Line';
import addToWishlist from '../../utils/addToWishlist';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

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
  const { id } = useParams();

  useEffect(() => {
    async function getName() {
      const gameData = await fetchGameInfo(`${id}`);
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
      <Navbar title={`${game?.name.slice(0, 10)}...`} />
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
