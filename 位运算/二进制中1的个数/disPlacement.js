/**
 * @description { 给定一个整数 , 请写一个函数判断该整数的奇偶性 }
 */

 function isOdd (num) { // odd 奇数
    return num % 2 !== 0 ;
 }

 // 一个数是偶数那么最后一个一定是 0 ,如果最后一位一定是 1
 function isOdd_2 (num) {
     let res = num & 1  ;
    return res === 1 ;
 }

 
/**
 * @description { 同样给定一个整数 , 请写一个 函数判断该整数是不是 2 的整数次幂 }
 * @思路 : 如果一个数是 2的整数次幂 , 那么它用 二进制表示完 , 肯定有唯一一位为 1 其余为 0 
 *  除此之外 , 这个数 减 1 , 得到的数 肯定是 000 .. 111 这样表示的
 *  把这两个数 相与 ,  必定为  0
 */

 function log2 (num) {
    return(num & (num - 1)) === 0 ;
 }

//  console.log(log2(16))
// console.log(isOdd(-9))


