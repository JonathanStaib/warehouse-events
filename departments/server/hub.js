'use strict';

require('dotenv').config();
const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const server = new Server();

server.on('connection', (socket) => {
  console.log('Socket connected to Hub Server', socket.id);
  // server.emit('SERVER');

  socket.on('ARRIVAL', (cargo) => {
    console.log(`WAREHOUSE: unloading cargo ${cargo.id} in Receiving`);
    socket.broadcast.emit('ARRIVAL', cargo);
  }, 1000);

  socket.on('UNLOADED', (cargo) => {
    console.log(`WAREHOUSE: cargo ${cargo.id} has been unloaded from Receiving`);
    socket.broadcast.emit('UNLOADED', cargo);
  }, 1200);

  socket.on('LOADED', (cargo)=> {
    console.log(`WAREHOUSE: cargo ${cargo.id} has been loaded in Shipping`);
    socket.broadcast.emit('DELIVER', cargo);
  }, 1400);

  socket.on('OUTFORDELIVERY', (cargo) => {
    console.log(`Cargo ${cargo.id} is on Route to ${cargo.store}`);
  }, 5000);
});


server.listen(PORT);
console.log('Server is Running on port', PORT);







