import express from 'express';
import cors from 'cors';
import {Client, Repository} from 'redis-om';

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

const client = new Client();
await client.open(
    'redis://admin:Rokas2020.@redis-18074.c98.us-east-1-4.ec2.cloud.redislabs.com:18074',
)

app.get('/', (req, res, next) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

