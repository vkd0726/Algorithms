/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:

    1
   / \
  2   2
 / \ / \
3  4 4  3


But the following [1,2,2,null,3,null,3] is not:

    1
   / \
  2   2
   \   \
   3    3

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
*/

// i think a valid strategy would be to reverse a child tree
// and then check if the left and right trees are identical

const isSymmetric = (root) => {
    let leftTree = root.left;
    let rightTree = root.right;

    if (leftTree.val !== rightTree.val) {
        return false;
    }

    if (leftTree.left.val !== rightTree.right.val) {
        return false;
    }
    
    if (leftTree.right.val !== rightTree.left.val) {
        return false;
    }

    return true;
}