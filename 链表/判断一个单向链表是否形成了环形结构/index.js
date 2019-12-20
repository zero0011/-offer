/**
 * 判断一个单向链表是否形成了环形结构
 */


 function IsCircularList(head) {
    // 鲁棒性
    if(head === null) return null;
    let fast = head;
    let slow = head;
    while(1) {
        if(fast === null || fast.next === null) { // 不是循环链表
            return false;
        } else if(fast === slow || fast.next === slow) { // 是循环链表
            return true;
        }
        // slow 每次走一步 , fast 每次走两步
        slow = slow.next;
        fast = fast.next.next;
    }
 }