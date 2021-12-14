type AddToWishlistProps = {
  username: string;
  game: string;
};

export default async function fetchWishlist({
  username,
  game,
}: AddToWishlistProps) {
  console.log('Wishlist');
  const response = await fetch('/api/wishlist', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username, game }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
