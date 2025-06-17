import express from 'express';

const app = express();
const port = Number(process.env.PORT) || 5000;

app.get('/', (_req, res) => {
  res.send('Server is running');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server listening on port ${port}`);
});
