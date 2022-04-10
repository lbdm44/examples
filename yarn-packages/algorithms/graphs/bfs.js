class Node {
  constructor(value) {
    this.value = value;

    /** @type {Node[]} */
    this.neighbors = [];
  }

  addNeighbor(node) {
    this.neighbors.push(node);
  }
}

/**
 * @param {Node} root - The root node we are searching from.
 * @param {function(Node): boolean} task - The task function that will be called for each node.
 * @returns {(null|Node)} - The first node that was found to be true.
 */
function bfs(root, task) {
  const queue = [root];

  /** @type {WeakMap<Node, boolean>} */
  const visited = new WeakMap();

  /** @type {(null|Node)} */
  let result = null;

  while (queue.length) {
    // Pop the first node off the queue, `shift` removes the first element, `pop` removes the last element.
    const node = queue.shift();

    // Set the node as visited.
    visited.set(node, true);

    // Check if the task function returns true.
    if (task(node)) {
      result = node;
      break;
    }

    // Add all the neighbors to the queue.
    node.neighbors.forEach((n) => {
      if (!visited.has(n)) {
        queue.push(n);
      }
    });
  }

  return result;
}

module.exports = { bfs, Node };
