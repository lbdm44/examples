function merge(arr1, arr2) {
  const result = [];

  while (arr1.length && arr2.length) {
    if (arr1[0] < arr2[0]) {
      result.push(arr1.shift());
    } else {
      result.push(arr2.shift());
    }
  }

  if (arr1.length > 0) {
    result.push(...arr1);
  }

  if (arr2.length > 0) {
    result.push(...arr2);
  }

  return result;
}

/**
 * 
 * @param {number[]} input 
 * @returns 
 */
function mergesort(input) {
  if (input.length <= 1) {
    return input;
  }

  const mid = Math.floor(input.length / 2);
  const left = mergesort(input.slice(0, mid));
  const right = mergesort(input.slice(mid));

  return merge(left, right);
}

module.exports = {
  mergesort,
};
