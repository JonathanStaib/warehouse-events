'use strict';

const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');
const { Chance } = require('chance');
const chance = new Chance();


function start() {
  let text = 'proof of life from receiving';
  console.log(text);
  socket.emit('HELLO', text);
}



start();