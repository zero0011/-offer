/**
 * 二路归并子算法
 */
const LinstedNode = require('../ListIntroduction/main.js');
let list1 = new LinstedNode();
let list2 = new LinstedNode();
let arr1 = [1];
let arr2 = [2];
for(let item1  of arr1) {
    list1.append(item1)
}
for(let item2 of arr2) {
    list2.append(item2);
}
 /**
  * @param list1
  * @param list2
  */

  /**
   * 结点定义
   */
  class Node {
      constructor(element) {
          this.element = element;
          this.next = null;
      }
  }

  function Merge (head1 ,head2) {
    // 鲁棒性
    if(head1 === null) return head2;
    if(head2 === null) return head1;
    let MergeHead = null;
    if(head1.element < head2.element) {
        MergeHead = head1;
        MergeHead.next = Merge(head1.next,head2);
    } else if(head1.element >= head2.element) {
        MergeHead = head2;
        MergeHead.next = Merge(head1,head2.next);
    }
    return MergeHead;
  }

  let h1 = list1.head.next;
  let h2 = list2.head.next;
//   console.log(Merge(h1,h2));


 /**
  * 迭代法
  */

  function MergeTwoList (head1,head2) {
      // 设置哨兵结点 , 由于未知链表长度, 不能用数组的方法
    let preHead = new Node(-1);
    let prev = preHead;
    if(head1 === undefined) return head2;
    if(head2 === undefined) return head1;
    while(head1 !== null && head2 !== null) {
        if(head1.element <= head2.element) {
            prev.next = head1;
            head1 = head1.next;
        } else {
            prev.next = head2;
            head2 = head2.next;
        }
        prev = prev.next;
    }

    prev.next = head1 === null ? head2 : head1;

    return preHead;
  }

  let MergeList = MergeTwoList(h1,h2);
//   console.log(MergeList);
  while(MergeList.next) {
      console.log(MergeList.next.element);
      MergeList = MergeList.next;
  }
  