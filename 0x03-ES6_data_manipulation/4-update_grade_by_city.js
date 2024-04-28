export default function updateStudentGradeByCity(studentList, city, newGrades) {
  const cityStudents = studentList.filter((item) => item.location === city);
  return cityStudents.map((student) => {
    const grade = newGrades.filter((stud) => stud.studentId === student.id);
    if (!grade[0]) {
      return { ...student, grade: 'N/A' };
    }
    return { ...student, grade: grade[0].grade };
  });
}
