export default async function fetchWishlistGameInfo(whereId: string[]) {
  console.log('TEST');
  console.log(whereId);
  let id = '';
  if (whereId.length >= 2) {
    for (let i = 0; i < whereId.length; i++) {
      if (i === 0) {
        id += `(${whereId[i]}`;
      } else if (i === whereId.length - 1) {
        id += `,${whereId[whereId.length - 1]})`;
      } else {
        id += `,${whereId[i]}`;
      }
    }
    console.log(id);
  } else {
    id = `${whereId[0]}`;
  }
  const response = await fetch('/api/twitchgames/game', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
