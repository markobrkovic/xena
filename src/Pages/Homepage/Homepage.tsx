import FeaturedGame from '../../components/FeaturedGame/FeaturedGame';
import GameList from '../../components/GameList/GameList';
import SearchInput from '../../components/SearchInput/SearchInput';
import styles from './Homepage.module.css';

export default function Homepage(): JSX.Element {
  return (
    <>
      <h2 className={styles.headline}>Featured</h2>
      <SearchInput
        className={styles.searchInput}
        onSearch={() => console.log('sth')}
      />
      <FeaturedGame />
      <h2 className={styles.headline}>Other Games</h2>
      <GameList />
    </>
  );
}
