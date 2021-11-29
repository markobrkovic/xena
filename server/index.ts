import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { connectDatabase } from './utils/database';
import { getGamesCollection } from './utils/database';

if (!process.env.MONGODB_URI || !process.env.CLIENT_ID || !process.env.AT) {
  throw new Error('NO MONGODB URL dotenv variable');
}

const port = process.env.PORT || 3001;
const app = express();
app.use(cors({ origin: '*' }));

app.use(express.json());

// Serve production bundle
app.use(express.static('dist'));

// Test
app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from server' });
});
//

app.get('/api/games', async (_request, response) => {
  const gameCollection = getGamesCollection();
  const cursor = await gameCollection.find();
  const allGames = await cursor.toArray();

  response.send(allGames);
});

// Adding a game manually to MongoDB
app.post('/api/games', async (request, response) => {
  const addGame = request.body;
  const gameCollection = getGamesCollection();
  const isGameInDatabase = await gameCollection.findOne({ name: addGame.name });

  if (!isGameInDatabase) {
    gameCollection.insertOne(addGame);
    response.send(addGame.name + ' has been successfully added');
  } else {
    response.status(404).send(addGame.name + ' is already in the database');
  }
});

// Fetching from twitch API

app.get('/api/twitchgames', async (_req, res) => {
  console.log('/twitchgames endpoint called');
  const options = {
    'Client-ID': `${process.env.CLIENT_ID}`,
    Authorization: `Bearer ${process.env.AT}`,
  };

  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'post',
    headers: options,
    body: 'fields *; where id = 1942;',
  })
    .then((res) => res.json())
    .catch((e) => {
      console.error({
        message: 'oh noes',
        error: e,
      });
    });

  console.log('Response:', response);
  res.send(response);
});

//

app.get('*', (_request, response) =>
  response.sendFile(path.join(__dirname, '../dist/index.html'))
);

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
