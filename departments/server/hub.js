'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const server = new Server();

server.on('connection', (socket) => {
  console.log('Socket connected to Hub Server', socket.id);
  // server.emit('SERVER');

  socket.on('ARRIVAL', (cargo) => {
    console.log(`WAREHOUSE: unloading cargo ${cargo.id}`);
    socket.emit('ARRIVAL', cargo);
  }, 1000);

  socket.on('UNLOADED', (cargo) => {
    console.log(`WAREHOUSE: cargo ${cargo.id} has been unloaded`);
    socket.emit('UNLOADED', cargo);
  }, 1200);
});


server.listen(PORT);
console.log('Server is Running on port', PORT);







