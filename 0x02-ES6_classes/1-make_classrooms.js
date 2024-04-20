import classRoom from './0-classroom';

export default function initializeRooms() {
  const room1 = new classRoom(19); // eslint-disable-line
  const room2 = new classRoom(20); // eslint-disable-line
  const room3 = new classRoom(34); // eslint-disable-line

  return [room1, room2, room3];
}
