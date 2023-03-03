'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');
const { trailerLoading, cargoDeliver } = require('./handler.js');

console.log('Shipping is running');

socket.on('UNLOADED', (cargo) => {
  setTimeout(() => {
    trailerLoading(cargo);
  }, 2000);
});

socket.on('DELIVER', (cargo) => {
  console.log('SHIPPING: Trailer is ready for delivery');
  cargoDeliver(cargo);
}, 4000);

