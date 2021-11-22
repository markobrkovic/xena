import express from 'express';
import path from 'path';

const port = 3001;
const app = express();

app.get('/api/hello', (_request, response) => {
  response.json({ message: 'Hello from server' });
});

// Serve production bundle
app.use(express.static('dist'));

app.get('*', (_request, response) =>
  response.sendFile(path.join(__dirname, '../dist/index.html'))
);

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
