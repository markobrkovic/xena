import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { connectDatabase } from './utils/database';
import { getGamesCollection, getUserCollection } from './utils/database';

if (
  !process.env.MONGODB_URI ||
  !process.env.CLIENT_ID ||
  !process.env.ACCESSTOKEN
) {
  throw new Error('NO MONGODB URL dotenv variable');
}

const port = process.env.PORT || 3001;
const app = express();
app.use(cors({ origin: '*' }));

app.use(express.json());

// Serve production bundle
app.use(express.static('dist'));

// TEST
app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from server' });
});
//

// USER

app.get('/api/users', async (_request, response) => {
  const userCollection = getUserCollection();
  const cursor = userCollection.find();
  const allUsers = await cursor.toArray();

  response.send(allUsers);
});

// AUTH USER

app.post('/api/login', async (request, response) => {
  console.log('WHY AM I NOT BEING CALLED');
  const user = request.body;
  console.log(user);
  const userCollection = getUserCollection();
  const userFound = await userCollection.findOne({ username: user.username });

  if (userFound) {
    if (
      userFound.username === user.username &&
      userFound.password === user.password
    ) {
      response.send('Succesfully logged in');
    } else {
      response.send('Incorrect password');
    }
  } else {
    response.status(404).send('Username not found');
  }
});

// ADD USER TO DATABASE

app.post('/api/register', async (request, response) => {
  const addUser = request.body;
  const userCollection = getUserCollection();
  const isUserInDatabase = await userCollection.findOne({
    username: addUser.username,
  });

  if (!isUserInDatabase) {
    userCollection.insertOne(addUser);
    response.send(addUser.username + ' has been successfully added');
  } else {
    response.status(404).send(addUser.username + ' is already in the database');
  }
});

// Adding a game manually to MongoDB
app.post('/api/:username/games', async (request, response) => {
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

// TWITCH API FETCH

app.get('/api/twitchgames', async (_req, res) => {
  console.log('/twitchgames endpoint called');
  const options = {
    'Client-ID': `${process.env.CLIENT_ID}`,
    Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
  };

  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'post',
    headers: options,
    body: 'fields *, cover.*, screenshots.*, websites.*, release_dates.*; where id = 1942;',
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
  return response;
});

// REDIRECT

app.get('*', (_request, response) =>
  response.sendFile(path.join(__dirname, '../dist/index.html'))
);

// MONGO CONNECTION

connectDatabase(process.env.MONGODB_URI).then(() =>
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  })
);
