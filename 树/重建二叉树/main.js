/**
 * 二叉树前序遍历
 */


 /**
  * 创建二叉树
  */

  class Node {
      constructor(data,left,right) {
          this.data = data;
          this.left = left;
          this.right = right;
      }
      show() {
          return this.data;
      }
  }

  // 二叉搜索树
  class BST {
      constructor() {
          this.root = null;
      }
      insert(data) {
        let node = new Node(data,null,null);
        if(this.root === null) {
            this.root = node;
        } else {
            let current = this.root;
            let parent;
            while(true) {
                parent = current;
                if(data < current.data) {
                    current = current.left;
                    if(current === null) {
                        parent.left = node;
                        break;
                    }
                } else {
                    current = current.right;
                    if(current === null) {
                        parent.right = node;
                        break;
                    }
                }
            }
        }
      }
      // 二叉树前序遍历
      perOrder (node) {
        if(node) {
            console.log(node.show());
            this.perOrder(node.left);
            this.perOrder(node.right);
        }
      }
  }

  // 测试数据
  let bst = new BST();
  let nums = [10,3,18,2,4,13,21,9,8,9];
  for(let item of nums) {
      bst.insert(item);
  }
  bst.perOrder(bst.root);