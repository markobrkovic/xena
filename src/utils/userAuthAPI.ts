export type UserCredentials = {
  username: string | null;
  password: string | null;
};

export default async function userAuthAPI({
  username,
  password,
}: UserCredentials) {
  console.log('called from authAPI before fetching');
  const response = await fetch('/api/login', {
    method: 'post',
    body: JSON.stringify({ username, password }),
  });
  const body = await response.json();
  console.log(body);
  return body;
}
