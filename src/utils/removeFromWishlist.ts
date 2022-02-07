export type WishlistProps = {
  username: string | null;
  gameId: number | undefined;
};

export default async function addToWishlist({
  username,
  gameId,
}: WishlistProps) {
  console.log('Wishlist');
  console.log(JSON.stringify({ username, gameId }));
  const response = await fetch('/api/wishlist/remove', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, gameId }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
