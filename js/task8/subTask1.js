function findElement(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

const elements = "i am lord voldemort".split(" ");

console.log(elements, findElement(elements, "lord"));

// Временная сложность O(n)
// Пространственная сложность O(1)
