const { NotImplementedError } = require('../lib/errors');
// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {
  constructor() {
    this._root = null;
  }
  root() {
    return this._root;
  }
    min() {
    if (!this._root) {
      return null;
    }
    let current = this._root;
    while (current.left) {
      current = current.left;
    }
    return current.data;
  }
  max() {
    if (!this._root) {
      return null;
    }
    let current = this._root;
    while (current.right) {
      current = current.right;
    }
    return current.data;
  }

  add(data) {
    this._root = this._addNode(this._root, data);
  }
  _addNode(node, data) {
    if(!node) {
      return new Node(data);
    }
    if (node.data === data) {
      return node;
    }
    if (data < node.data) {
      node.left = this._addNode(node.left, data);
    } else {
      node.right = this._addNode(node.right, data);
    }
    return node;
  }
  has(data) {
    return !!this.find(data);
  }

  find(data) {
    return this._findNode(this._root, data);
  }
  _findNode(node, data) {
    if(!node) {
      return null;
    }
    if (node.data === data) {
      return node;
    }
    if (data < node.data) {
      return this._findNode(node.left, data);
    } else {
      return this._findNode(node.right, data);
    }
  }

  remove(data) {
    this._root = this._removeNode(this._root, data);
  }
  _removeNode(node, data) {
    if (!node) {
      return null;
    }
    if (data < node.data) {
      node.left = this._removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this._removeNode(node.right, data);
      return node;
    }
    if (!node.left && !node.right) {
      return null;
    }
    if (!node.left) {
      return node.right;
    }
    if (!node.right) {
      return node.left;
    }
    let minFromRight = node.right;
    while (minFromRight.left) {
      minFromRight = minFromRight.left;
    }
    node.data = minFromRight.data;
    node.right = this._removeNode(node.right, minFromRight.data);
    return node;
  }
}

module.exports = {
  BinarySearchTree
};