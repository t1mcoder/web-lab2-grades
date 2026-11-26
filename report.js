import {
  grades,
  calculateAverage,
  findTopStudent,
  filterFailed,
  addLetterGrade,
} from "./main.js";

console.log("Средний балл:", calculateAverage(grades));
console.log("Лучший студент:", findTopStudent(grades));
console.log("Не сдали:", filterFailed(grades, 60));
console.log("Буквенные оценки:", addLetterGrade(grades));
