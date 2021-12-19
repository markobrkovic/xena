export default async function fetchSearch(search: string | null) {
  console.log('TEST');
  console.log(search);
  const response = await fetch('/api/twitchgames/search', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ search }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
