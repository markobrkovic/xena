import styles from './Game.module.css';
import Image from '../Image/Image';
import Title from '../Title/Title';
import Button from '../Button/Button';

export type GameProps = {
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
  storyline?: string;
  summary: string;
  genres: [{ name: string }];
};

export default function Game({
  id,
  name,
  screenshots,
  storyline,
  summary,
  genres,
}: GameProps) {
  let story;

  if (storyline) {
    story = <p className={styles.description}>{storyline.slice(0, 100)}...</p>;
  } else if (summary) {
    story = <p className={styles.description}>{summary.slice(0, 100)}...</p>;
  } else {
    story = <p className={styles.description}>{'No story'}</p>;
  }

  return (
    <section className={styles.gameContainer}>
      <div className={styles.imageContainer}>
        <Image
          className={styles.image}
          size="screenshot_med"
          image_id={`${
            screenshots
              ? screenshots[0].image_id
              : 'https://st3.depositphotos.com/23594922/31822/v/600/depositphotos_318221368-stock-illustration-missing-picture-page-for-website.jpg'
          }`}
        />
        <Title
          className={styles.gameTitle}
          title={`${name}`}
          size="h2"
          weight="light"
        />
      </div>
      <p className={styles.genre}>
        {genres ? genres[0].name : 'No genre available'}
      </p>
      {story}
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
