export default async function fetchGameName() {
  const response = await fetch('http://localhost:3001/api/twitchgames');
  const body = await response.json();
  console.log(body[0].name);
  return body[0].name;
}
