function sortArray(arr) {
  return arr.sort((a, b) => (a > b ? 1 : -1));
}

const elements = "с большой силой приходит большая ответственность".split("");
console.log(sortArray(elements));

// Временная сложность: правильный ответ дать сложно, смотря какой алгоритм сортировки использует движок js,
// допустим что это quickSort, тогда O(n*log(n))
// Пространственная сложность O(n)
