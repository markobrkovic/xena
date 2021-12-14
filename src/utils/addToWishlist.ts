type AddToWishlistProps = {
  username: string;
  gameId: string;
};

export default async function addToWishlist({
  username,
  gameId,
}: AddToWishlistProps) {
  console.log('Wishlist');
  const response = await fetch('/api/wishlist', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, gameId }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
