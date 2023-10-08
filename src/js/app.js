import express from 'express';
import { createServer } from 'node:http';
import { Server } from 'socket.io';

const app = express();
const server = createServer(app);
const io = Server(server);

app.use(express.static('src'));

io.on('connection', socket => {
  console.log('User connected!');
  socket.emit('message', 'User connected!');
});
server.listen(3000, () => {
  console.log('listening on *:3000');
});
