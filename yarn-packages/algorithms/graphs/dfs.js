/**
 * @param {import("./Node")} root - The root node we are searching from.
 * @param {function(Node): boolean} task - The task function that will be called for each node.
 * @returns {(null|Node)} - The first node that was found to be true.
 */
function dfs(root, task) {
  const stack = [root];

  /** @type {WeakMap<Node, boolean>} */
  const visited = new WeakMap();

  /** @type {(null|Node)} */
  let result = null;

  while (stack.length) {
    // Pop the last node off the stack, `shift` removes the first element, `pop` removes the last element.
    const node = stack.pop();

    // Set the node as visited.
    visited.set(node, true);

    // Check if the task function returns true.
    if (task(node)) {
      result = node;
      break;
    }

    // Add all the neighbors to the stack.
    node.neighbors.forEach((n) => {
      if (!visited.has(n)) {
        stack.push(n);
      }
    });
  }

  return result;
}

module.exports = { dfs };
