import styles from './GameWishlist.module.css';
import Image from '../Image/Image';
import Button from '../Button/Button';
import { useNavigate } from 'react-router-dom';
import Line from '../design-components/Line/Line';
import type { GameProps } from '../Game/Game';

export default function Game({ id, name, screenshots, genres }: GameProps) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Line
        className={styles.line}
        width="viewport"
        highestOpacityPoint="middle--secondary"
      />
      <section className={styles.gameContainer}>
        <Image
          className={styles.image}
          size="screenshot_med"
          image_id={`${
            screenshots
              ? screenshots[0].image_id
              : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
          }`}
        />
        <div className={styles.imageFade}></div>
        <Button
          onClick={() => navigate(`/game/${id}`)}
          className={styles.moreInfoBtn}
          text={`${name}`}
          color="text"
          backgroundColor="transparent"
          size="medium"
        />
        <p className={styles.genre}>
          {genres ? genres[0].name : 'No genre available'}
        </p>
        <button className={styles.removeFromWishlist}>Remove</button>
      </section>
    </div>
  );
}
