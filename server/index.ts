import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import path from 'path';
import { connectDatabase } from './utils/database';
import { getGamesCollection } from './utils/database';

if (!process.env.MONGODB_URI) {
  throw new Error('NO MONGODB URL dotenv variable');
}

const port = process.env.PORT || 3001;
const app = express();
app.use(express.json());

// Serve production bundle
app.use(express.static('dist'));

// Test
app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from server' });
});

app.get('/api/games', async (_request, response) => {
  const gameCollection = getGamesCollection();
  const cursor = await gameCollection.find();
  const allGames = await cursor.toArray();

  response.send(allGames);
});

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

app.get('*', (_request, response) =>
  response.sendFile(path.join(__dirname, '../dist/index.html'))
);

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
