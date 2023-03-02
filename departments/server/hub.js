'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const server = new Server();

server.on('connection', (socket) => {
  console.log('Socket connected to Hub Server', socket.id);
  // server.emit('SERVER');
  socket.on('HELLO', () => {
    console.log('SERVER: Receiving is connected to Server.');
  });
});


server.listen(PORT);
console.log('Server is Running on port', PORT);







