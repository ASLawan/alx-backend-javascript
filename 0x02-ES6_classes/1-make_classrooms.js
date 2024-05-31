import ClassRoom from './0-classroom';

export default function initializeRooms() {
  let room;
  const roomSizes = [19, 20, 34];
  const rooms = [];
  for (const size of roomSizes) {
    room = new ClassRoom(size);
    rooms.push(room);
  }
  return rooms;
}
