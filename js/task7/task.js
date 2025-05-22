const data = [
  { id: 1, value: 10, active: true },
  { id: 2, value: 20, active: false },
  { id: 3, value: 30, active: true },
  { id: 4, value: 23, active: true },
  { id: 5, value: 53, active: false },
];

function optimizeProcessing(arr) {
  const result = {
    activeItems: [],
    totalValue: 0,
  };
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].active) {
      result.activeItems.push(arr[i]);
      result.totalValue += arr[i].value;
    }
  }
  return result;
}

// для проверки
const activeItems = data.filter((item) => item.active);
const values = activeItems.map((item) => item.value);
const totalValue = values.reduce((sum, value) => sum + value, 0);
console.log(activeItems);
console.log(totalValue);

//
const result = optimizeProcessing(data);
console.log(result.activeItems);
console.log(result.totalValue);
