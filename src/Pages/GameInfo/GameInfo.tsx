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
      human: string;
    }
  ];
  storyline: string;
  summary: string;
  genres: [{ name: string }];
};

export default function GameInfo() {
  const [game, setGame] = useState<null | GameProps>(null);
  const [isWishlist, setIsWishlist] = useState(true);
  const [buttonStyle, setButtonStyle] = useState('addToWishlist');
  const [buttonText, setButtonText] = useState('Add to Wishlist');
  const { id } = useParams();
  const username = localStorage.getItem('username');

  let summary;
  let content;

  useEffect(() => {
    async function getGame() {
      const gameData = await fetchGameInfo(`${id}`);
      setGame(gameData);
    }

    getGame();
  }, [isWishlist]);

  if (!game) {
    content = <p className={styles.loading}>Loading...</p>;
  } else {
    if (game?.storyline) {
      summary = <p className={styles.description}>{game?.storyline}</p>;
    } else if (game?.summary) {
      summary = <p className={styles.description}>{game?.summary}</p>;
    } else {
      summary = <p className={styles.description}>{'No story'}</p>;
    }
    content = (
      <div className={styles.gameContainer}>
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
              title={`Release Date: ${game?.release_dates[0].human}`}
              size="h4"
              weight="thin"
            />
          </div>
          <span className={styles.genre}>
            {game?.genres ? game?.genres[0].name : 'No genre available'}
          </span>
          <button
            onClick={async () => {
              setIsWishlist(isWishlist ? false : true);
              if (!isWishlist) {
                setButtonStyle('addToWishlist');
                setButtonText('Add to Wishlist');
              } else {
                setButtonStyle('removeFromWishlist');
                setButtonText('Remove from Wishlist');
              }
              await addToWishlist({ username: username, gameId: game?.id });
            }}
            className={`${styles[buttonStyle]}`}
          >
            {buttonText}
          </button>
        </section>
        <Line width="viewport" highestOpacityPoint="end" />
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

  return (
    <>
      <div className={styles.container}>
        <Navbar title={`${game ? game.name.slice(0, 10) : 'Loading'}...`} />
        {content}
      </div>
    </>
  );
}
