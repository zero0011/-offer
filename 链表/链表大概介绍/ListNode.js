/**
 * 单向链表节点的定义
 */

 class ListNode  {
     constructor (element) {
         this.element = element; // 表示节点上的数据
         this.next = null;  // 表示指向下一个节点的链接
     }
 }

 module.exports = ListNode;