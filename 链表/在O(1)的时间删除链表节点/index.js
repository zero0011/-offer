/**
 * 在O(1)的时间复杂度上 删除链表节点
 */

/**
 * 引入链表
 */
const LinkedList = require('../链表大概介绍/main.js');
let list = new LinkedList();
list.insert(1,'head');
list.insert(2,1);
list.insert(3,2);
list.insert(4,3);
// list.display()

// 链表节点定义
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}

/**
 * @param {*} head
 * @param {*} deleted
 */

/**
 * 思路: 如果删除的是头结点 , 则直接返回头结点的下一个结点
 *  如果删除的是尾结点, 那么必须循环
 *  如果要删除的中间的结点 ,那么不用循环, 进行值和指针的改变就行
 */

function DeleteNode (head,deleted) {
    // 头结点 , 
    if(head === deleted) {
        head = head.next;
    }
    // 尾结点
    if(deleted.next === null) {
        let current = head;
        // 寻找前一个节点
        while(current.next !== deleted) {
            current = current.next;
        }
        current.next = current.next.next;
    } 
    // 中间节点
    else {
        deleted.value = deleted.next.value ;
        deleted.next = deleted.next.next ;
    }
}


// 测试

let head = list.head.next;
let deleted = list.find(3);
console.time('a');
DeleteNode(head,deleted);
console.timeEnd('a');
list.display();
