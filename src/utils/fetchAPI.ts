export default async function fetchGameInfo() {
  const response = await fetch('http://localhost:3001/api/twitchgames');
  const body = await response.json();
  console.log(body[0].screenshots);
  return body[0];
}
