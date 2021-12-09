export default async function fetchGameInfo(id: string) {
  console.log('MRS');
  console.log(id);
  const response = await fetch('/api/twitchgames', {
    method: 'post',
    body: id,
  });
  const body = await response.json();
  console.log(body);

  if (response) return body[0];
}
