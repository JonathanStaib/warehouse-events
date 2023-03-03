'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');

const trailerLoading = (cargo) => {
  socket.emit('LOADED', cargo);
  console.log(`Trailer is loaded with cargo ${cargo.id}`);
  console.log(cargo);
};


const cargoDeliver = (cargo) => {
  console.log(`Cargo ${cargo.id} is out for delivery`);
  socket.emit('OUTFORDELIVERY', cargo);

};


module.exports = {
  trailerLoading,
  cargoDeliver,
};