/**
 * 例如链表
 */

const LinkedNode = require('../ListIntroduction/main.js.js.js');

let list = new LinkedNode();
let arr = [1,2,3,4,5,6];
for(let item of arr) {
    list.append(item)
}
// list.display()
/**
 * 反转链表 
 * 输入一个链表的头结点, 反转该链表并输出反转链表后的头结点。
 */

 // 定义头结点
 class Node {
     constructor(element) {
        this.element = element;
        this.next = null;
     }
 }

 // 反转链表
 function ReverseList (head) {
    // 鲁棒性
    if(head === null) return null;
    let pre = null;
    let next = null;
    while(head !== null) {
        next = head.next;
        head.next = pre;
        pre = head;
        head = next;
    }
    return pre.element;
 }

let head = list.head;
console.log(ReverseList(head))