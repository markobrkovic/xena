import { useEffect, useState } from 'react';
import styles from './Friends.module.css';
import fetchFriends from '../../utils/fetchFriends';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Friend from '../../components/Friend/Friend';

export type FriendProps = {
  username: string | null;
  img?: string;
};

export default function Friends() {
  const [friends, setFriends] = useState<null | FriendProps[]>(null);
  const { id } = useParams();
  const username = localStorage.getItem('username');
  let content;
  useEffect(() => {
    async function getFriends() {
      const userFriends = await fetchFriends({ username });
      setFriends(userFriends);
    }

    getFriends();
  }, []);

  if (!friends) {
    content = <p>No Friends</p>;
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
      <div className={styles.container}>
        <Navbar title="Friends" />
        {content}
      </div>
    </>
  );
}
