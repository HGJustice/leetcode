function binarySearch(arrNums, target, findFirst) {
  let left = 0;
  let right = arrNums.length - 1;
  let result = -1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arrNums[mid] == target) {
      result = mid;
      if (findFirst) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else if (arrNums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return result;
}

function search(nums, target) {
  if (!nums) {
    return [-1, -1];
  }

  const first = binarySearch(nums, target, true);
  const last = binarySearch(nums, target, false);

  if (first !== -1) {
    return [first, last];
  }

  return [-1, -1];
}

const arr = [1];
console.log(search(arr, 1));
