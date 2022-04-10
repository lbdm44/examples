const { describe, expect, test } = require("@jest/globals");

const { quicksort } = require("../quicksort");

describe("quicksort", () => {
  test("it should handle an empty array input", () => {
    expect(quicksort([])).toEqual([]);
  });

  test('it should handle an array with a single item', () => {
    expect(quicksort([1])).toEqual([1]);
  });

  test('it should handle an array with multiple items in it', () => {
    expect(quicksort([3, 2, 1])).toEqual([1, 2, 3]);
    expect(quicksort([3, 4, 5, 0, 2, 1])).toEqual([0, 1, 2, 3, 4, 5]);
  });
});
