class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    // If the tree is empty, set root equal to a new node with value 'val' and return that node (insert at the root); otherwise, find the correct spot for the new node
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    // if this.root !== null, set 'current' equal to 'root'
    let current = this.root;
    // while 'current' node is not null
    while (current) {
      // if 'val' < the value of 'current' node, look at the left side of the tree
      if (val < current.val) {
        // if there are no nodes to the left of 'current' node, create a new node and assign it to the left of 'current' node with a value of 'val' and return the tree (inserts new node )
        if (current.left === null) {
          current.left = new Node(val);
          return this;
          // if there is a node to the left of 'current' node, set 'current' node equal to the node to the of left of 'current' node and then go back to the top of the while loop (the 'current' node now equals the node to the left)
        } else {
          current = current.left;
        }
        // if 'val' > the value of 'current' node, look at the right side of the tree
      } else if (val > current.val) {
        // if there are no nodes the the right of 'current' node, create a new node and assign it to the right of 'current' node with a value of 'val' and return tree (inserts new node )
        if (current.right === null) {
          current.right = new Node(val);
          return this;
          // if there is a node to the right of 'current' node, set 'current' node equal to the node to the right of 'current' node and then go back to the top of the while loop (the 'current' node now equals the node to the right)
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, current) {
    // If the tree is empty, set root equal to a new node with value 'val' and return that node (insert at the root); otherwise, find the correct spot for the new node
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    // if this.root !== null, set 'current' node equal to 'root'
    let current = this.root;

    // if val < the value of 'current' node, look at the left side of the tree
    if (val < current.val) {
      // if there are no nodes to the left of 'current' node, create a new node and assign it to the node to the left of 'current' node with value of 'val' and return tree (inserts new node )
      if (current.left === null) {
        current.left = new Node(val);
        return this;
      }
      // if there is a node to the left of 'current' node, execute recursive function with val and 'current.left' passed in as props ('current' now equals current.left)
      return this.insertRecursively(val, current.left);
      // if val > the value of 'current' node, look to the right side of the tree
    } else {
      // if there are no nodes to the right of 'current' node, create a new node and assign it to the node to the right of 'current' node with value of 'val' and return tree (inserts new node )
      if (current.right === null) {
        current.right = new Node(val);
        return this;
      }
      // if there is a node to the right of 'current' node , execute recursive function with val and 'current.right' passed in as props ('current' now equals current.right)
      return this.insertRecursively(val, current.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    //initialize 'current' node equal to 'root'
    let current = this.root;
    // initialize 'found' to false. When 'val' is found, 'found' gets changed to 'true'. Used as a condition in while loop
    let found = false;

    // if 'val' equals 'current.val' (root.val) then current is the val you're looking for so return 'current'
    if (val === current.val) return current;

    // if the value of root is not what you're looking for, do the following while 'current' !== null AND 'found' is false
    while (current && !found) {
      // if val < the value of 'current' node, look at the left side of the tree and set 'current' node equal to the value of the node to the left of 'current' node. Then go back to the top of the while loop with 'current' node now equaling the node to the left of 'current' node.
      if (val < current.val) {
        current = current.left;
      }
      // if val > the value of 'current' node, look at the right side of the tree and set 'current' node equal to the value of the node to the right of 'current' node. Then go back to the top of the while loop with 'current' node now equaling the node to the right of 'current' node.
      else if (val > current.val) {
        current = current.right;
      }
      // otherwise, if val === current.val, you've found your number. Set 'found' to true
      else {
        found = true;
      }
    }
    // if 'found' never gets set to 'true', there is no element 'val' in the tree
    if (!found) return undefined;
    // return the 'current' node that equals 'val'
    return current;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  // set the default value of 'current' equal to 'root'
  findRecursively(val, current = this.root) {
    // if the there isn't a root, the tree is empty so return undefined
    if (this.root === null) return undefined;

    // if 'val' < the value of 'current' node, look at the left side of the tree
    if (val < current.val) {
      // if there is no node to the left of 'current' node, return undefined since 'val' was not found
      if (current.left === null) return undefined;
      // otherwise execute the function recursively with 'val' and 'current.left' passed in as props
      return this.findRecursively(val, current.left);
    }
    // if 'val' > the value of 'current' node, look at the right side of the tree
    else if (val > current.val) {
      // if there is no node to the right of 'current' node, return undefined since 'val' was not found
      if (current.right === null) return undefined;
      // otherwise execute the function recursively with 'val' and 'current.right' passed in as props
      return this.findRecursively(val, current.right);
    }
    // return the 'current' node that equals 'val'
    return current;
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    // initialize 'data' to an empty array
    let data = [];
    //initialize 'current' node equal to 'root'
    let current = this.root;

    function traverse(node) {
      // add 'node.val' to 'data' array
      data.push(node.val);
      // as long as there's a node to the left of 'node', traverse to the left node and push that 'val' to the 'data' array. Keep going to the left until there are no more left nodes then skip to next line of code
      node.left && traverse(node.left);
      // if there's a node to the right, traverse to the right node and push that 'val' to the 'data' array. Keep going to the right until there are no more right nodes then skip to next line of code
      node.right && traverse(node.right);
    }
    // call the traverse function again with a new 'current' node passed in as a prop to start again
    traverse(current);
    // return the 'data' array containing the nodes in order of how the tree was traversed
    return data;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    // initialize 'data' to an empty array
    let data = [];
    //initialize 'current' node equal to 'root'
    let current = this.root;

    function traverse(node) {
      // if there's a node to the left of 'node', traverse to the left node and continue all the way to the end of that branch until there are no more left nodes
      node.left && traverse(node.left);
      // push the 'val' of the furthermost left node to the 'data' array
      data.push(node.val);
      // if there's a node to the right of the current node, traverse to the right node and continue all the way to the end of that branch until there are no more left nodes
      node.right && traverse(node.right);
    }
    // call the traverse function again with a new 'current' node passed in as a prop to start again (the node to the right of node.left above)
    traverse(current);
    // return the 'data' array containing the nodes in order of how the tree was traversed
    return data;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    // initialize 'data' to an empty array
    let data = [];
    //initialize 'current' node equal to 'root'
    let current = this.root;

    function traverse(node) {
      // if there's a node to the left of 'node', traverse to the left node and continue all the way to the end of that branch until there are no more left nodes
      node.left && traverse(node.left);
      // if there's a node to the right of the 'node', traverse to the right node
      node.right && traverse(node.right);
      // push the 'val' of node to the 'data' array
      data.push(node.val);
    }
    // call the traverse function again with a new 'current' node passed in as a prop to start again
    traverse(current);
    // return the 'data' array containing the nodes in order of how the tree was traversed
    return data;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    // initialize 'node'
    let node = this.root;
    // intialize to empty arrays
    let queue = [];
    let data = [];

    // add root node to 'queue'
    queue.push(node);
    // while there are elements in 'queue'
    while (queue.length) {
      // let node equal the first node removed from 'queue'
      node = queue.shift();
      // add the node removed from 'queue' to the data array
      data.push(node.val);
      // if there's a node to the left, add it to 'queue'
      if (node.left) {
        queue.push(node.left);
      }
      // if there's a node to the right, add it to 'queue' then go back to the top of the while loop and repeat
      if (node.right) {
        queue.push(node.right);
      }
    }
    // return the array with all the nodes that were traversed over ('data')
    return data;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
