function binarySearch(numsArray, target, findFirst) {
  let left = 0;
  let right = numsArray.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (numsArray[mid] == target) {
      result = mid;

      if (findFirst) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (numsArray[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return result;
}

function findIndices(numsArray, target) {
  const arr = numsArray.sort((a, b) => a - b);

  const first = binarySearch(arr, target, true);
  const last = binarySearch(arr, target, false);

  const result = [];
  if (first > -1) {
    for (let i = first; i <= last; i++) {
      result.push(i);
    }
  }
  return result;
}

array = [1, 2, 5, 2, 3];
console.log(findIndices(array, 2));
