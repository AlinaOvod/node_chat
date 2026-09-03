'use strict';

const prisma = require('../prismaClient');

const DEFAULT_ROOM = 'general';

function listRooms() {
  return prisma.room.findMany({ orderBy: { createdAt: 'asc' } });
}

function createRoom(name) {
  return prisma.room.create({ data: { name } });
}

function renameRoom(id, name) {
  return prisma.room.update({ where: { id }, data: { name } });
}

function deleteRoom(id) {
  return prisma.room.delete({ where: { id } });
}

function ensureDefaultRoom() {
  return prisma.room.upsert({
    where: { name: DEFAULT_ROOM },
    update: {},
    create: { name: DEFAULT_ROOM },
  });
}

module.exports = {
  DEFAULT_ROOM,
  listRooms,
  createRoom,
  renameRoom,
  deleteRoom,
  ensureDefaultRoom,
};
