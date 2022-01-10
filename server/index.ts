import dotenv from 'dotenv';
dotenv.config();
import path from 'path';
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { connectDatabase } from './utils/database';
import { getUserCollection } from './utils/database';

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

// USER

app.get('/api/users', async (_request, response) => {
  const userCollection = getUserCollection();
  const cursor = userCollection.find();
  const allUsers = await cursor.toArray();

  response.send(allUsers);
});

app.post('/api/friends/add', async (request, response) => {
  const user = request.body;
  const userCollection = getUserCollection();
  const isUserInDatabase = await userCollection.findOne({
    username: user.username,
  });
  let newvalues;

  if (isUserInDatabase) {
    const myquery = { username: user.username };
    const isFriendInDatabase = isUserInDatabase.friends.find(
      (friendName: string) => friendName === user.friendName
    );
    const friends = isUserInDatabase.friends;
    if (isUserInDatabase.friends && !isFriendInDatabase) {
      friends.push(user.friendName);
      newvalues = {
        $set: { friends: friends },
      };
    } else {
      newvalues = {
        $set: { friends: friends },
      };
    }
    userCollection.updateOne(myquery, newvalues, function (err, _res) {
      if (err) throw err;
      console.log('1 document updated');
    });
    response.send(user);
  } else {
    response.status(404).send();
  }
});

// Get Friends from user

app.post('/api/friends', async (request, response) => {
  const user = request.body;
  const userCollection = getUserCollection();
  const isUserInDatabase = await userCollection.findOne({
    username: user.username,
  });
  if (isUserInDatabase && isUserInDatabase.friends) {
    response.send(isUserInDatabase.friends);
  } else {
    response.status(404).send(user);
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

// AUTH USER

app.post('/api/login', async (request, response) => {
  const user = request.body;
  const userCollection = getUserCollection();
  const userFound = await userCollection.findOne({
    username: user.username,
    password: user.password,
  });

  if (userFound) {
    response.send(userFound);
  } else {
    response.status(404).send('Username or password incorrect');
  }
});

// Add game to user's wishlist

app.post('/api/wishlist', async (request, response) => {
  const user = request.body;
  const userCollection = getUserCollection();
  const isUserInDatabase = await userCollection.findOne({
    username: user.username,
  });

  let newvalues;

  if (isUserInDatabase) {
    const myquery = { username: user.username };
    const isGameInDatabase = isUserInDatabase.games.find(
      (id: number) => id === user.gameId
    );
    const games = isUserInDatabase.games;
    if (isUserInDatabase.games && !isGameInDatabase) {
      games.push(user.gameId);
      newvalues = {
        $set: { games: games },
      };
    } else {
      newvalues = {
        $set: { games: games },
      };
    }
    userCollection.updateOne(myquery, newvalues, function (err, _res) {
      if (err) throw err;
      console.log('1 document updated');
    });
    response.send(user);
  } else {
    response.status(404).send(JSON.stringify('You are not logged in'));
  }
});

// Remove game from user's wishlist

app.post('/api/wishlist', async (request, response) => {
  const user = request.body;
  const userCollection = getUserCollection();
  const isUserInDatabase = await userCollection.findOne({
    username: user.username,
  });

  let newvalues;

  if (isUserInDatabase) {
    const myquery = { username: user.username };
    const isGameInDatabase = isUserInDatabase.games.find(
      (id: number) => id === user.gameId
    );
    const games = isUserInDatabase.games;
    if (isUserInDatabase.games && isGameInDatabase) {
      games.pop(user.gameId);
      newvalues = {
        $set: { games: games },
      };
    } else {
      newvalues = {
        $set: { games: games },
      };
    }
    userCollection.updateOne(myquery, newvalues, function (err, _res) {
      if (err) throw err;
      console.log('1 document updated');
    });
    response.send(user);
  } else {
    response.status(404).send(JSON.stringify('You are not logged in'));
  }
});

// Fetch Games for user's Wishlist

app.post('/api/wishlist/library', async (request, response) => {
  const user = request.body;
  const userCollection = getUserCollection();
  const isUserInDatabase = await userCollection.findOne({
    username: user.username,
  });
  if (isUserInDatabase && isUserInDatabase.games) {
    response.send(isUserInDatabase.games);
  } else {
    response.status(404).send(user);
  }
});

// Fetching games from twitch API

app.post('/api/twitchgames/game', async (req, res) => {
  const gameId = req.body;
  console.log(gameId);
  console.log('/twitchgames/game endpoint called');
  const options = {
    'Client-ID': `${process.env.CLIENT_ID}`,
    Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
  };

  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'post',
    headers: options,
    body: `fields *, genres.*, screenshots.*, websites.*, release_dates.*; where id = ${gameId.id}; limit 30;`,
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

app.post('/api/twitchgames/search', async (req, res) => {
  const { search } = req.body;
  console.log('Search ' + search);
  console.log('/twitchgames/game endpoint called');
  const options = {
    'Client-ID': `${process.env.CLIENT_ID}`,
    Authorization: `Bearer ${process.env.ACCESSTOKEN}`,
  };

  const response = await fetch('https://api.igdb.com/v4/games', {
    method: 'post',
    headers: options,
    body: `fields *, genres.*, screenshots.*, websites.*, release_dates.*; search "${search}";`,
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
