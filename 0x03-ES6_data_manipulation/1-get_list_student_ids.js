export default function getListStudentIds(objectArray) {
  if (!Array.isArray(objectArray)) {
    return [];
  }
  return objectArray.map((item) => item.id);
}
