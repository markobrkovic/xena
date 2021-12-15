export default async function addToWishlist() {
  console.log('Wishlist');
  const response = await fetch('/api/wishlist/library');
  const body = await response.json();
  console.log(body);
  return body;
}
