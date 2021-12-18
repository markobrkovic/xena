import styles from './Friend.module.css';

type FriendProps = {
  username: string | null;
  img?: string;
};

export default function Friend({ username, img }: FriendProps) {
  return (
    <section className={styles.friendContainer}>
      <img className={styles.image} src={img} alt="" />
      <span className={styles.username}>{username}</span>
    </section>
  );
}
