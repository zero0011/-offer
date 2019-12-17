/**
 * 题目 : 数组中有一个数字出现的次数超过数组长度的一半, 请找出这个数字。
    例如 输入一个长度为 9 的数组 [ 1, 2, 3, 2, 2, 2 ,5 , 4 , 2].
    由于数字 2 在数组出现了 5 次 , 超过数组长度的一半 , 因此输出 2。
 */


// 1.基于快速排序的解法


// 2.基于数组的特性

function Appear_half(arr) {
    var start = 0;
    while (arr.length !== 1 ) {
        if (arr[start] !== arr[start + 1]) {
            arr = arr.slice(start +2)
            start = 0 ;
        } else {
            start ++ ;
        }
    }
    return arr[0]
}

let arr = [1, 2, 3, 2, 2, 2, 5, 4, 2]
// console.log(Appear_half(arr))

// 3.哈希表
function Appear_hash (arr) {
    let map = new Map()
    for(let item of arr) {
        map.set(item ,1)
    }
    for(let i = 0,j =1 ; i < arr.length ; i ++) {
        if(map.get(arr[i]) > arr.length /2) return arr[i] ;
        let value = map.get(arr[i]) ;
        value++ ;
        map.set(arr[i] , value) 
    }
}


console.log(Appear_hash(arr))