import express from 'express';
import cors from 'cors';
import {Client, Repository} from 'redis-om';
import {todoSchema} from '../schema/todo.schema.js';

const app = express();
const port = process.env.PORT || 9000;

app.use(express.json());
app.use(cors());

const client = new Client();
await client.open(
    'redis://admin:Rokas2020.@redis-18074.c98.us-east-1-4.ec2.cloud.redislabs.com:18074',
)

const todoRepo = new Repository(todoSchema, client);
await todoRepo.dropIndex();
await todoRepo.createIndex();

app.post('/appTodo', async (req, res) => {
  const todoItem = todoRepo.createEntity();

  todoItem.todo = req.body.todo;
  todoItem.status = req.body.status;
  todoItem.id = await todoRepo.save(todoItem);

  res.send('OK');
});

app.get('/getTodos', async (req, res) => {
  res.send(await todoRepo.search().returnAll());
});

app.delete('/deleteTodo/:id', async (req, res) => {
  await todoRepo.remove(req.params.id);
  res.send('OK');
});


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

