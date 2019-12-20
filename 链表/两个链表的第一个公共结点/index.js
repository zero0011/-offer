/**
 * 两个链表的第一个公共结点
 * 题目: 输入两个链表 ,找出他们的第一个公共结点
 */

 //链表结点定义
 class Node {
     constructor(element) {
         this.element = element;
         this.next = null;
     }
 }


 function FindFirstCommonNode (pHead1,pHead2) {
     function getListLength(pHead) {
         let len = 0;
         let pNode = pHead;
         while(pNode !== null) {
             len++;
             pNode = pNode.next;
         }
         return len;
     }
     // 得到两个链表的长度
     let pLen1 = getListLength(pHead1);
     let pLen2 = getListLength(pHead2);
     let nLenDif = pLen1 - pLen2;
     
     let PListHeadLong = pHead1;
     let PListHeadShort = pHead2;
     if(pLen2 > pLen1) {
        PListHeadLong = pLen2;
        PListHeadShort = pLen1;
        nLenDif = pLen2 - pLen1;
     }

     // 先在长链表上走几步, 再同时在两个链表上遍历
     for(let i = 0 ; i < nLenDif ; i++) {
         PListHeadLong = PListHeadLong.next;
     }
     while( PListHeadLong !== null && PListHeadShort !== null && PListHeadLong !== PListHeadShort) {
         PListHeadLong = PListHeadLong.next;
         PListHeadShort = PListHeadShort.next;
     }
     // 得到第一个公共结点
     let pLastCommonNode = PListHeadLong;
     return pLastCommonNode;
     
 }
