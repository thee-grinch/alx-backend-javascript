export default function getStudentIdsSum(studentsList) {
  if (!Array.isArray(studentsList)) {
    return [];
  }
  return studentsList.reduce((accumulator, current) => accumulator + current.id, 0);
}
