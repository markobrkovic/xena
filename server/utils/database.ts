import { MongoClient } from 'mongodb';

let client: MongoClient;

export async function connectDatabase(url: string) {
  client = new MongoClient(url);
  await client.connect();
}

export function getGamesCollection() {
  return client.db().collection('games');
}

export function getUserCollection() {
  return client.db().collection('users');
}
