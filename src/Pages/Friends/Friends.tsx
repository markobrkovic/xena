import { useEffect, useState } from 'react';
import styles from './Friends.module.css';
import fetchFriends from '../../utils/fetchFriends';
import Navbar from '../../components/Navbar/Navbar';
import Friend from '../../components/Friend/Friend';
import SearchInput from '../../components/SearchInput/SearchInput';

export type FriendProps = {
  username: string | null;
  img?: string;
};

export default function Friends() {
  const [friends, setFriends] = useState<null | FriendProps[]>(null);
  const [search, setSearch] = useState<null | string>(null);
  const username = localStorage.getItem('username');

  console.log(search);
  let content;
  useEffect(() => {
    async function getFriends() {
      const userFriends = await fetchFriends({ username });
      setFriends(userFriends);
    }

    getFriends();
  }, []);

  if (!friends) {
    content = (
      <div className={styles.loadingScreen}>
        <div className={styles.loadingIcon}></div>
      </div>
    );
  } else if (friends.length < 1) {
    content = <p className={styles.loading}>No friends</p>;
  } else {
    content = friends?.map((friend) => (
      <Friend
        key={friend.username}
        username={friend.username}
        img={friend.img}
      />
    ));
  }

  return (
    <>
      <Navbar title="Friends" />
      <div className={styles.container}>
        <span className={styles.addOrSearch}>Add or Search For a Friend</span>
        <SearchInput
          text="Enter username"
          className={styles.searchInput}
          onSearch={setSearch}
        />
        <div className={styles.friendsContainer}>{content}</div>
      </div>
    </>
  );
}
