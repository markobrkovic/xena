export async function fetchGames() {
  const response = await fetch(
    'https://store.steampowered.com/api/appdetails?appids=730'
  );
  const body = await response.json;
  console.log(body);
  return body;
}
