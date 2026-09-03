'use strict';

require('dotenv/config');

const app = require('./app');
const roomsService = require('./services/roomsService');

const PORT = process.env.PORT || 4000;

async function start() {
  await roomsService.ensureDefaultRoom();

  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

start();
