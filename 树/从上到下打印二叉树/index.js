/**
 * 层序遍历
 */



const Tree = require('../Introduction of tree/index.js');
let tree = new Tree();
tree.createTree();
let head = tree.tree;
 /**
  * 利用队列实现 树的层数遍历
  */
 function BFS(root) {
     // 队列
    let queue = [];
    queue.push(root);
    while(queue.length !== 0) {
        let res = queue.shift();
        console.log(res.element);
        if(res.lChild !== null) {
            queue.push(res.lChild);
        }
        if(res.rChild !== null) {
            queue.push(res.rChild);
        }
    }
 }

 BFS(head);

