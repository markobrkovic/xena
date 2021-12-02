export default async function fetchGameInfo() {
  const response = await fetch('/api/twitchgames');
  const body = await response.json();
  console.log(body[0].screenshots);
  return body[0];
}
