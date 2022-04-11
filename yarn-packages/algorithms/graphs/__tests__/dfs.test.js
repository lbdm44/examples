const { describe, expect, test } = require("@jest/globals");

const { dfs } = require("../dfs");
const { Node } = require("../Node");

describe("DFS", () => {
  test("it should not find a node if none match criteria", () => {
    const root = new Node(1);

    // Our task will always return false;
    const task = (_) => false;

    expect(dfs(root, task)).toBeNull();
  });

  test("it should find a node if it matches the criteria", () => {
    const root = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    root.addNeighbor(node2);
    root.addNeighbor(node3);
    root.addNeighbor(node4);
    root.addNeighbor(node5);

    // Our task will always return true;
    const task = (n) => n.value === 3;

    expect(dfs(root, task)).toBe(node3);
  });

  test("it should handle a circular graph", () => {
    const root = new Node(1);
    const node2 = new Node(2);
    const node3 = new Node(3);
    const node4 = new Node(4);
    const node5 = new Node(5);

    root.addNeighbor(node2);
    root.addNeighbor(node3);
    node3.addNeighbor(node4);
    node4.addNeighbor(root);
    node4.addNeighbor(node5);

    // Our task will always return true;
    const task = (n) => n.value === 5;

    expect(dfs(root, task)).toBe(node5);
  });
});
