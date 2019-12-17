/**
 * @description { 不用加减乘除做加法 }
 */

 function add(num1,num2) {
     // 计数器
     let count = 0 ;
     let sum = [] ;
     while(num2!==0) {
         let index1 = (num1 & 1) ;
         let index2 = (num2 & 1) ;
         if(index1 === 1 && index2 === 1) {
             count = 1 ;
         }
        sum.push(index1 ^ index2 ^ count) ;
        count = 0;
         num1 >>>= num1
         num2 >>>= num2
     }
     return sum ;
 }

 console.log(add(4,7))

