/**
 * @题目 : 在一个长度为 n 的数组里的所有数字都在 0 到 n-1 的范围内。
    数组中某些数字是重复的 , 但不知道有几个数字是重复的 , 
    也不知道每个数字重复几次 
    请找出 数组中任意一个重复的数字
 */

/**
 * @default 这里要特别注意 找到任意重复的一个值并赋值到 duplication[0]
 * @description { 函数返回 true /false}
 */

 /**
  * @description  { 时间复杂度 O(n) 
  *     空间复杂度 O(n)
  * }
  */
function duplicate (numbers) {
    let len = numbers.length ;
    // flag 数组
    let flag = []
    for(let i = 0 ; i< len ; i ++) {
        flag[i] = 0;
    }
    for(let item of numbers) {
        flag[item] ++ ;
        if(flag[item] > 1) {
            var duplication = item ;
            break ;
        }
    }
    return duplication=== undefined ? false : duplication
}
let arr = [2,1,3,0,4,2]

console.log(duplicate(arr))

/**
 * @description { 算法优化 }
 * @description { 时间复杂度 O(n) 
 *  空间复杂度 O(1)
 *  }
 * @思路 :  假设 : 数组没有重复元素 , 那么每一个元素都可以移动到他 下标所对应 的位置
 */

 function repeat (numbers) {
    for(let i = 0 ; i < numbers.length ; i++) {
        if(i === numbers[i]) continue ;
        if(i !== numbers[i]) {
            //要交换的两个数相同时 , 证明是重复元素
            if(numbers[numbers[i]] === numbers[i]) {
                return numbers[i]
            }
            // 交换数字
            let num = numbers[numbers[i]] ;
            numbers[numbers[i]] = numbers[i] ;
            numbers[i] = num ;
        }
    }
    return false ;
 }

//  console.log(repeat(arr))
