function getNext() {
  let counter = 0;

  return () => counter++;
}

const next = getNext();

console.log(next()); // 0
console.log(next()); // 1
console.log(next()); // 2
console.log(next()); // 3
