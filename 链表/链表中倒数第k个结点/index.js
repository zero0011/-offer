/**
 * 链表中倒数第k个结点
 */


/**
 * 链表结点定义
 */
class Node {
    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


// 双指针解法
const FindKthToTail = (head, k) => {
    // 输入不合法
    if (head === null || k <= 0) return null;
    let first = head;
    let second = head;
    let i = 0;
    while (first.next) {
        if (i < k - 1) {
            if(first.next !== null) {
                first = first.next;
                i++;
            } else {
                return null;
            }
        } else {
            first = first.next;
            second = second.next;
        }
    }
    return second.element;
}


const LinkedNode = require('../链表大概介绍/main.js');

let list = new LinkedNode();
list.insert(1, 'head');
list.insert(2, 1);
list.insert(3, 2);
list.insert(4, 3);
list.insert(5, 4);
list.insert(6, 5);
// list.display()

let head = list.head;

// console.log(FindKthToTail(head, 100))


/**
 * 双指针解法2
 */

 function ListNodeOfK (head,k) {
     //鲁棒性
     if(head === null || k <= 0) return null;
     // 两个指针
    let first = head.next;
    let second = head.next;
    for(let i = 0 ; i < k - 1 ; i ++) {
        // 如果 first 已经是最后的结点了 
        if(first.next === null) {
            return null;
        }
        first = first.next;
    }
    while(first.next !== null) {
        first = first.next;
        second = second.next;
    }
    return second.element;
 }

 console.log(ListNodeOfK(head,6))