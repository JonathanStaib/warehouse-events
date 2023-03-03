'use strict';

const Chance = require('chance');
const chance = new Chance();
const { io } = require('socket.io-client');
const socket = io('http://localhost:3001');

const generateOrder = () => {

  let cargo = {
    store: chance.company(),
    id: chance.string({length: 1, numeric: true}),
    customer: chance.name({ nationality: 'en' }),
    address: chance.address({ short_suffix: true }),
  };
  chance.string();
  console.log(`cargo has arrived in trailer ${cargo.id}`);
  socket.emit('ARRIVAL', cargo);
};

const unloaded = (cargo) => {
  console.log(`RECEIVING: unloaded trailer ${cargo.id}, ready for new trailer`);
  socket.emit('UNLOADED', cargo);
};

module.exports = { generateOrder, unloaded };