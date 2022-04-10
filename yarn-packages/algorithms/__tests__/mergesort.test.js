const { describe, expect, test } = require("@jest/globals");

const { mergesort } = require("../mergesort");

describe("mergesort", () => {
  test("it should handle an empty array input", () => {
    expect(mergesort([])).toEqual([]);
  });

  test('it should handle an array with a single item', () => {
    expect(mergesort([1])).toEqual([1]);
  });

  test('it should handle an array with multiple items in it', () => {
    expect(mergesort([3, 2, 1])).toEqual([1, 2, 3]);
  });
});
