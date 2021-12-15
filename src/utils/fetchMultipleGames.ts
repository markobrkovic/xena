export default async function fetchMultipleGames() {
  console.log('TEST2');

  const response = await fetch('/api/twitchgames', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
  });
  const body = await response.json();
  console.log(body);
  return body;
}
