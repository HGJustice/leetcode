function twoSum(numsArray, target) {
  const prev = new Map();

  for (let i = 0; i < numsArray.length; i++) {
    const complement = target - numsArray[i];
    if (prev.has(complement)) {
      return [prev.get(complement), i];
    }
    prev.set(numsArray[i], i);
  }
  return [];
}

const result = twoSum([1, 2, 3, 4, 5, 6], 7);
console.log(result);
