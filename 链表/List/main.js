const Node = require('./ListNode.js.js.js');

/**
 * Linked List class
 */

 class LinkedList {
     /**
      * 构造器 , 初始化头节点
      */
     constructor () {
        this.head = new Node('head'); // 头节点
     }

     /**
      * 根据指定值找出当前节点
      * @param { * } item
      */
     find (item) {
        let currNode = this.head;
        while(currNode.element !== item) {
            currNode = currNode.next;
        }
        return currNode;
     }

     /**
      * 把新的节点插入到指定节点的后面
      * @param {*} newElement 插入的新节点
      * @param {*} item 插入元素的前一个节点值
      */
     insert(newElement ,item) {
         let newNode = new Node(newElement);
         let currNode = this.find(item);
         newNode.next = currNode.next;
         currNode.next = newNode;
     }

     /**
      * 移出节点
      * @param {*} item
      */
     remove (item) {
        // 找出指定节点的前一个节点
        let prevNode = this.head;
        while(prevNode.next !== null && prevNode.next.element !== item) {
            prevNode = prevNode.next;
        }

        if(prevNode.next !== null) {
            // 设置前一个节点next指向当前节点的next
            prevNode.next = prevNode.next.next;
        }
     }
     /**
      * 显示所有节点数据
      */
     display () {
         let currNode = this.head;
         while(currNode.next !== null) {
             console.log(currNode.next.element);
             currNode = currNode.next;
         }
     }

     /**
      * 向链表最好添加元素
      */
     append (item) {
        let newNode = new Node(item);
        let currNode = this.head;
        while(currNode.next !== null) {
            currNode = currNode.next;
        }
        currNode.next = newNode;
     }
 }

module.exports = LinkedList;