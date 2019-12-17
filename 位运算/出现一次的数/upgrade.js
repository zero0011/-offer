/**
 * @description { 在其他都出现两次的数组中找到只出现一次的那两个数}
 * @要求 : 时间复杂度 O(N) 空间复杂度 O(1)
 */

function OnlyAppearTwice(arr) {
   // 如果数组长度小于 2, 直接返回
    if (arr.length < 2) return 

    // get num1 ^ num2
    let res = 0 ;
    for(let item of arr) {
       res = res ^ item
    }
    // res 不为 0 , 我们假设第 k 位 不为0,我们只要设置一个数第k位为 1 ,其余位为 0 记录为 log2
    let log2 = res & (-res) ;
    let res2 = 0 ;
    for (let item of arr) {
      if((log2 & item) !== 0) {
         res2 = res2 ^ item
      }
    }
    return [res2 , res ^ res2]
}


let arrTwice = [5,5,4,2,3,4,3,1,1,9] ;


console.log(OnlyAppearTwice(arrTwice))





/**
 * @description {res 不为 0 , 我们假设第 k 位 不为0,我们只要设置一个数第k位为 1 ,其余位为 0 记录为 log2 }
 */

 function FindLog2 (res) {
   return res & (-res)
 } 
 
 let num = 8 ;
 console.log(FindLog2(num))


 

