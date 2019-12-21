/**
 * 树的遍历
 */

/**
 * 树的结点定义
 */
class TreeNode {
    constructor(element) {
        this.element = element;
        this.lChild = null;
        this.rChild = null;
    }
}

class TreeCode {
    constructor() {
        this.tree = new TreeNode('A');
    }
    /**
     * 创建数据
     */
    createTree() {
        this.tree.lChild = new TreeNode('B');
        this.tree.rChild = new TreeNode('C');
        this.tree.lChild.lChild = new TreeNode('D');
        this.tree.lChild.lChild.lChild = new TreeNode('G');
        this.tree.lChild.lChild.rChild = new TreeNode('H');
        this.tree.rChild.lChild = new TreeNode('E');
        this.tree.rChild.rChild = new TreeNode('F');
        this.tree.rChild.lChild.rChild = new TreeNode('I');
        return this.tree;
    }
    /**
     * 前序遍历
     */
    ProOrderTraverse(tree) {
        if (tree === null) return ;
        console.log(tree.element);
        this.ProOrderTraverse(tree.lChild);
        this.ProOrderTraverse(tree.rChild);
    }
    /**
     * 中序遍历
     */
    InOrderTraverse(biTree) {
        if (biTree == null) return;
        this.InOrderTraverse(biTree.lChild);
        console.log(biTree.element);
        this.InOrderTraverse(biTree.rChild);
    }
    /**
     * 后序遍历
     */
    PostOrderTraverse(biTree) {
        if (biTree == null) return;
        this.PostOrderTraverse(biTree.lChild);
        this.PostOrderTraverse(biTree.rChild);
        console.log(biTree.element);
    }
    /**
     * 深度优先遍历
     * 主要利用栈的先进后出
     * DFS
     */
    DepthFirstSearch(tree) {
        let queue = [];
        queue.push(tree);
        while(queue.length !== 0) {
            let node = queue.shift();
            console.log(node.element);
            if(node.lChild) {
                queue.push(node.lChild)
            }
            if(node.rChild) {
                queue.push(node.rChild)
            }
        }
    }
    /**
     * 广度优先遍历
     * 主要利用队列
     */
    BreadthFirstSearch(tree) {
        let queue = [];
        queue.push(tree);
        while(queue.length) {
            let node = queue.shift();
            console.log(node.element);
            if(node.lChild) {
                queue.push(node.lChild)
            }
            if(node.rChild) {
                queue.push(node.rChild)
            }
        }
    }
}

module.exports = TreeCode;


let myTree = new TreeCode();
// console.log(myTree.createTree());
myTree.createTree()
// console.log('前序遍历');
// myTree.ProOrderTraverse(myTree.tree)
// console.log('中序遍历');
// myTree.InOrderTraverse(myTree.tree)
myTree.BreadthFirstSearch(myTree.tree);
