/**
 * In place swaps two elements in an array.
 *
 * @param {Array} input 
 * @param {number} i 
 * @param {number} j 
 */
function swap(input, i, j) {
  const temp = input[i];
  input[i] = input[j];
  input[j] = temp;
}

/**
 * Partitions in the input array and returns the index of the pivot.
 *
 * @param {number[]} input 
 * @param {number} low 
 * @param {number} high 
 * @returns {number}
 */
function partition(input, low, high) {
  const pivot = input[high];
  let i = low;

  for (let j = low; j < high; j++) {
    if (input[j] <= pivot) {
      swap(input, i, j);
      i++;
    }
  }

  swap(input, i, high);
  return i;
}


/**
 * 
 * @remarks
 * 
 * Time Complexity: O(n log n)
 *  - The time complexity is O(n log n) because of the recursive calls.
 * Space Complexity: O(1)
 *  - The space complexity is O(1) because the input array is not modified.
 *
 * @param {number[]} input
 * @param {number} low
 * @param {number} high
 * @returns {number[]}
 */
function quicksort(input, low = 0, high = input.length - 1) {
  if (input.length <= 1) {
    return input;
  }

  if (low < high) {
    const pivotIndex = partition(input, low, high);

    quicksort(input, low, pivotIndex - 1);
    quicksort(input, pivotIndex + 1, high);
  }

  return input;
}

module.exports = { quicksort };
