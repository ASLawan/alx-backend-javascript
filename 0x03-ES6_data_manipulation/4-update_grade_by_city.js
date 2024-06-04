#!/usr/bin/node

export default function updateStudentGradeByCity(students, city, newGrades) {
  const studentsToUpdate = students.filter((student) => student.location === city);

  const updatedStudents = studentsToUpdate.map((student) => {
    const gradeObj = newGrades.find((grade) => grade.studentId === student.id);
    return {
      ...student,
      grade: gradeObj ? gradeObj.grade : 'N/A',
    };
  });

  return updatedStudents;
}
