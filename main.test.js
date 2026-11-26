import test from "node:test";
import assert from "node:assert/strict";
import { grades, calculateAverage, findTopStudent, filterFailed, addLetterGrade } from "./main.js";

test("исходные данные: средний балл, лучший студент и должник", () => {
  assert.equal(calculateAverage(grades), 77.6);
  assert.equal(findTopStudent(grades), "Денис");
  assert.deepEqual(filterFailed(grades), ["Студент_X"]);
});

test("проходной балл: строго ниже порога, свой порог учитывается", () => {
  const students = [{ name: "59", score: 59 }, { name: "60", score: 60 }, { name: "75", score: 75 }];
  assert.deepEqual(filterFailed(students), ["59"]);
  assert.deepEqual(filterFailed(students, 75), ["59", "60"]);
});

test("буквенные оценки: границы 75 и 90 включаются в B и A", () => {
  const students = [74, 75, 89, 90].map(score => ({ name: String(score), score }));
  assert.equal(addLetterGrade(students), students);
  assert.deepEqual(students.map(student => student.letter), ["C", "B", "B", "A"]);
});

test("пустой массив обрабатывается без ошибки", () => {
  assert.equal(calculateAverage([]), null);
  assert.equal(findTopStudent([]), null);
  assert.deepEqual(filterFailed([]), []);
  assert.deepEqual(addLetterGrade([]), []);
});

test("при равных максимальных баллах возвращается первый студент", () => {
  assert.equal(findTopStudent([{ name: "Первый", score: 92 }, { name: "Второй", score: 92 }]), "Первый");
});
