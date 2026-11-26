export const grades = [
  { name: "Макар", score: 85 },
  { name: "Денис", score: 92 },
  { name: "Анна", score: 78 },
  { name: "Даша", score: 88 },
  { name: "Студент_X", score: 45 },
];

export function calculateAverage(data) {
  if (data.length === 0) return null;
  let sum = 0;
  for (const student of data) sum += student.score;
  return sum / data.length;
}

export function findTopStudent(data) {
  if (data.length === 0) return null;
  let topStudent = data[0];
  for (const student of data) {
    if (student.score > topStudent.score) topStudent = student;
  }
  return topStudent.name;
}

export function filterFailed(data, passScore = 60) {
  const names = [];
  for (const student of data) {
    if (student.score < passScore) names.push(student.name);
  }
  return names;
}

export function addLetterGrade(data) {
  for (const student of data) {
    if (student.score >= 90) student.letter = "A";
    else if (student.score >= 75) student.letter = "B";
    else student.letter = "C";
  }
  return data;
}
