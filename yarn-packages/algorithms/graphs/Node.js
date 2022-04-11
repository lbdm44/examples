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

module.exports = { Node };
