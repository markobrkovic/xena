export default async function fetchGameInfo(id: string) {
  console.log('TEST');
  console.log(id);
  const response = await fetch('/api/twitchgames/game', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  const body = await response.json();
  console.log(body);
  return body[0];
}
