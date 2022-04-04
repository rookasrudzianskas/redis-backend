import express from 'express';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

