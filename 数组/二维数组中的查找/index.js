/**
 * @题目 : 
 * 给定一个二维数组 , 其每一行从左到右递增排序 , 从上到下也是递增排序 
    给定一个数 , 判断这个数是否在该二维数组中 
 */


  /**
   * @description { 时间复杂度为 O(m * n) }
   * @description { 相当于遍历了一下二维数组 }
   */

  function Traversing (target , arr) {
    // arr 为 二维数组
    // console.log(arr)
    let len = arr.length ;
    for(let i = 0 ; i < len ; i++) {
        let length = arr[i].length ;
        for(let j = 0 ; j < length ; j++) {
            if(arr[i][j] === target) {
                return true
            }
        }
    }
    return false
  }


 /**
  * @description { 要求时间复杂度 O(m + n) , 
  * 空间复杂度 O(1) 。其中 m 为行数 , n 为列数 }
  * @思路 : 从左下角 开始遍历数组  , 如果当前的元素 大于 target ,则说明目标元素在当前元素的右边 ,
  * 当前的元素 小于 target , 则说明 目标元素在当前元素的上边
  */

    function find (target,arr) {
      if(arr === null || arr.length === 0 || arr[0].length === 0) return false
      // 列
      let column = arr[0].length ;
      // 行
      let row = arr.length ;
      // 从左下角 开始 判断大小
      let i = row - 1 ;
      let j = 0 ;
      while (target !== arr[i][j] && i >= 0 && j < column) {
        if(target > arr[i][j]) {
          j++ ;
        }
        if(target < arr[i][j]) {
          i-- ;
        }
      }
      if(target === arr[i][j]) return true
      else return false
    }




  let arr = 
  [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
  
  console.time('Traversing')
  console.log(Traversing(30 , arr))
  console.timeEnd('Traversing')