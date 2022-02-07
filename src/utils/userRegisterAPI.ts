export type UserCredentials = {
  username: string;
  password: string;
};

export default async function userAuthAPI({
  username,
  password,
}: UserCredentials) {
  const response = await fetch('/api/register', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username, password }),
  });

  if (!response.ok) {
    const errorMessage = await response.text();
    throw errorMessage;
  }

  const body = await response.json();
  return body;
}
