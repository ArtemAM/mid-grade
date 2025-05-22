function mapWithReduce(arr, callback) {
  return arr.reduce((acc, el) => {
    acc.push(callback(el));
    return acc;
  }, []);
}

function doubleIt(element) {
  if (typeof element === "number") {
    return element * 2;
  }
  if (typeof element === "string") {
    return element.repeat(2);
  }
}

const elements = [322, 1337, "foo", -21, "bar"];

console.log(elements.map((el) => doubleIt(el))); // для проверки
console.log(mapWithReduce(elements, doubleIt));
