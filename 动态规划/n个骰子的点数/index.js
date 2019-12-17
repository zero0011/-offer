/**
 * @description { 把n 个骰子扔在地上 , 求点数和为 s 的概率}
 */

 /**
  * @description { 随机 返回 1 到 max  的值}
  */
 function getRandomMax(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
 }

 console.log(getRandomMax(6))