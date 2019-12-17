/**
 * 数组中任意第k大的数字
 */

 // 基于快速排序的思想
 function TheKNumberArray (arr) {
    // 随机取一个数字
    let index = Math.floor(Math.random() * arr.length);
    let key = arr[index];
    let left = [];
    let right = [];
    for(let i = 0 ; i < arr.length ; i++) {
        if(arr[i] < key) {
            left.push(arr[i]);
        } else if(arr[i] > key) {
            right.push(arr[i]);
        }
    }
    let SumArr = left.concat([key],right);
    let index1 = left.indexOf(key);
    let mid = Math.floor(arr.length / 2);
    if(index1 < mid) {
        TheKNumberArray()
    }
 }

 let arr = [1,2,3,4,5];



 /**
  * 数组中任意第k大的数字
  */
 
  function MoreThanHalfNum (numbers ,length) {
      if(numbers.length < 0) return ;
      let middle = length >> 1 ;
      let start = 0 ;
      let end = length - 1;
      
  }