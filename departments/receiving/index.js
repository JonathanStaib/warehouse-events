'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');
const { generateOrder, unloaded } = require('./handler');

console.log('Receiving is running');

console.log('---new trailer arrives---');

setTimeout(() => {
  generateOrder(socket);
}, 5000);

socket.on('ARRIVAL', (cargo) => {
  setTimeout(() => {
    unloaded(cargo);
  }, 1500);
});