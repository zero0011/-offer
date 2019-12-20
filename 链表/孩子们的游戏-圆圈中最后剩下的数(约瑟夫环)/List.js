/**
 * 循环链表的实现类
 */

 class Node {
     constructor(element) {
         this.element = element;
         this.next = null;
     }
 }

 class CircularLinkedList {
     constructor() {
        this.head = new Node(-1);
        this.length = 0;
     }
     append(element) {
        let newNode =  new Node(element);
        let currNode = this.head;
        let len = this.length;
        if(this.length === 0) {
            currNode.next = newNode;
            newNode.next = this.head;
        }
        else {
            while(len) {
                currNode = currNode.next;
                len--;
            }
            currNode.next = newNode;
            newNode.next = this.head;
        }
        this.length++;
     }
     display () {
         let currNode = this.head;
         let len = this.length;
         while(len) {
             console.log(currNode.next.element);
             currNode = currNode.next;
             len--;
         }
     }
     /**
      * 移出第k个结点
      */
     removeAtK (index) {
        
     }
     /**
      * 判断是不是环形链表
      */
     isCycle () {
        // 快慢指针
        let slow = this.head;
        let fast = this.head;
        while(1) {
            if(slow === fast || fast.next === slow) {
                return true;
            } else if(fast === null || fast.next === null) {
                return false;
            }
            slow = slow.next;
            fast = fast.next.next;
        }
     }
     get size() {
         return this.length;
     }
 }

module.exports =  CircularLinkedList;