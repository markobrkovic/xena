import { WishlistProps } from './addToWishlist';

export default async function getWishlist({ username }: WishlistProps) {
  console.log('Wishlist');
  const response = await fetch('/api/wishlist/library', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
