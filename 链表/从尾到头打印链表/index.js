const LinkedNode = require('../链表大概介绍/main.js');

let list = new LinkedNode();
list.insert(1,'head');
list.insert(2,1);
list.insert(3,2);
// list.display()

/**
 * @description { 从尾到头打印链表 }
 */



/**
 * 用栈来实现
 */

LinkedNode.prototype.reverse = function () {
    let currNode = this.head;
    let stack = []; // 设置栈
    while(currNode.next !== null) {
        stack.push(currNode.next.element);
        currNode = currNode.next;
    }
    while(stack.length !== 0) {
        console.log(stack.pop());
    }
}

// list.reverse()

/**
 * 用递归实现
 */

 function recursive(head) {
     let currNode = head;
     if(currNode!==null) {
         if(currNode.next !== null) {
            recursive(currNode.next);
         }
         if(currNode.element!=='head') {
             console.log(currNode.element);
         }
     }
 }
 let head = list.head;
 recursive(head);

