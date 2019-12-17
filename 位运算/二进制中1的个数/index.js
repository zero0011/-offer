/**
 * @description { 二进制中 1 的个数 , 其中 负数用补码表示 }
 * @思路 : 最基本的解法 
 *         通过右移运算 与 1相与得到的结果来计算结果 ,
 *          这个题的陷阱就在于 存在 负数的情况 ,
 *          
 */

 function NumberOf1 (n) {
     // 计数器
     let count = 0 ;
     let flag = 1 ;
    while (flag) {
        if(n & flag) {
            count ++ ;
        }
        flag <<= 1  ; 
    }
    return count ;
 }
var a = -10 ;
 console.log(NumberOf1(a))


 /**
  * @description { 二进制中1的个数 }
  */

  function NumberOf1_updata (n) {
    //计数器
    let count = 0 ;
    while(n) {
        if(n & 1) {
            count ++ ;
        }
        n >>>= 1 ;
    }
    return count ;
  }

  console.log(NumberOf1_updata(-10))



  /**
   * @description { 最优解 }
   */

    function NumberOf1_best (n) {
        let count = 0 ;
        while(n) {
            count ++ ;
            n = n & (n - 1)
        }
        return count ;
    }

    console.log(NumberOf1_best(-10))