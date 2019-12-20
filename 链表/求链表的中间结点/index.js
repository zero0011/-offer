/**
 * 求链表的中间结点
 */

 function HalfNode (head) {
    // 鲁棒性
    if(head === null) return null
    let first = head;
    let second = head;
    let flag = 0;
    while(first.next !== null) {
        first = first.next;
        flag++;
        // 第二个指针, 只有在 第一个指针移动偶数次, 才移动
        if(flag % 2 === 0 && flag!== 0) {
           second = second.next;
        }
    }
    return second.element;
 }

 const LinkedNode = require('../ListIntroduction/main.js.js.js');

let list = new LinkedNode();
list.insert(1, 'head');
list.insert(2, 1);
list.insert(3, 2);
list.insert(4, 3);
list.insert(5, 4);
list.insert(6, 5);
list.display()

let head = list.head.next;
console.log(HalfNode(head))