type AddToWishlistProps = {
  username: string;
  gameId: number;
};

export default async function addToWishlist({
  username,
  gameId,
}: AddToWishlistProps) {
  console.log('Wishlist');
  console.log(JSON.stringify({ username, gameId }));
  const response = await fetch('/api/wishlist', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, gameId }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
