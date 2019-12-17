/**
 * 数组中第k大的数字
 */

 function getNumberOfArray (arr) {
    let index = Math.floor(Math.random() * arr.length );
    let key = arr[index];
    let start = 0;
    let end = arr.length - 1;
    while(1) {
        if(end < key) {
            // 交换两个元素
            [arr[start] , arr[end]] = [arr[end] , arr[start]];
        }
    }
 }

 let arr = []