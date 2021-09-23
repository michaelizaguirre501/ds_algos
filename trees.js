//construct tree traverse bredth first
const Deque = require("./collections/deque"); //collectionjs.com

class TreeNode {
  constructor(value) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

//O(N) time | O(N)space -- where n is the number of nodes in the tree

function traverse(root) {
  let result = [];
  if (root === null) {
    return result;
  }
  const queue = new Deque();
  queue.push(root);
  while (queue.length > 0) {
    const levelSize = queue.length;
    currentLevel = [];
    for (let i = 0; i < levelSize; i++) {
      currentNode = queue.shift();
      currentLevel.push(currentNode.val);
      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
    }
    result.push.length(currentLevel);
  }
  return result;
}

const root = new TreeNode(12);
root.left = new TreeNode(7);
root.right = new TreeNode(1);
root.left.left = new TreeNode(9);
root.right.left = new TreeNode(10);
root.right.right = new TreeNode(5);
console.log(`Level order traversal: ${traverse(root)}`);
