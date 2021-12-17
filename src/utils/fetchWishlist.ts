type WishlistLibraryProps = {
  username: string | null;
};

export default async function fetchWishlist({
  username,
}: WishlistLibraryProps) {
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
