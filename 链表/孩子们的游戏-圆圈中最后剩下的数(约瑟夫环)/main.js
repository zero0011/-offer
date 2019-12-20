/**
 * 约瑟夫环
 */


 /**
  * 解法1:
  * 用环形链表模拟圆圈
  */

const CycleList = require('./list.js');

let list = new CycleList();
list.append(1);
list.append(2);
list.append(3);
list.display()
console.log(list.isCycle())

