function countFrequency(arr) {
  const frequency = {};
  for (let i = 0; i < arr.length; i++) {
    if (frequency[arr[i]]) {
      frequency[arr[i]]++;
    } else {
      frequency[arr[i]] = 1;
    }
  }
  return frequency;
}

const elements =
  "совсем не важно, как ты ударишь, а важно, какой держишь удар".split("");

console.log(countFrequency(elements));

// Временная сложность O(n)
// Пространственная сложность O(n)
