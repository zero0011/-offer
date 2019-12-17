/**
 * @description{ 只出现一次的数 }
 * @question : 在其他数都出现两次的数组中找到只出现一次的那个数
 * @description { 结论 : 对于任何排列的数组 , 如果只有一个数出现了奇数次 , 其他的数都出现了偶数次, 那么最终异或的结果肯定是出现奇数次的那个数}
 */

 function OnlyAppearOnce (arr) {
     let start = 0 ;
     for(let item of arr) {
         start = item ^ start ;
     }
     return start ;
 }

 let arr = [5,5,4,2,3,4,3,1,1,7]



console.log(OnlyAppearOnce(arr))

let a = 10 ;
let b = 2 ;
// console.log(a , b)
c = a ^ b ;
a = c ^ a ;
b = c ^ a ;

// console.log(a , b)



