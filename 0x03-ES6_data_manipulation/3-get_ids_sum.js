#!/usr/bin/node

export default function getStudentIdsSum(students) {
  const sumOfIds = students.reduce((sum, student) => sum + student.id, 0);

  return sumOfIds;
}
