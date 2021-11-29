export default async function games() {
  const response = await fetch('http://localhost:3001/api/twitchgames');
  const body = await response.json();
  alert(body.results);
  return body.results;
}
