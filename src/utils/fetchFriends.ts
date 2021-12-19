import { FriendProps } from '../Pages/Friends/Friends';

export default async function fetchWishlist({ username }: FriendProps) {
  console.log('Friends');
  const response = await fetch('/api/friends/', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
