'use strict';

const prisma = require('../prismaClient');

function listMessages(roomId) {
  return prisma.message.findMany({
    where: { roomId },
    orderBy: { createdAt: 'asc' },
  });
}

function createMessage(roomId, author, text) {
  return prisma.message.create({ data: { author, text, roomId } });
}

module.exports = { listMessages, createMessage };
