function hasDuplicates(numsArray) {
  const seen = new Set();
  for (const num of numsArray) {
    if (seen.has(num)) {
      return true;
    }
    seen.add(num);
  }
  return false;
}

const result = hasDuplicates([1, 4, 6, 8, 9, 9]);
console.log(result);
