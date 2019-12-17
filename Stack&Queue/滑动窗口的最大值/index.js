/**
 * @description { 滑动窗口的最大值 }
 * @问题 : 给定一个数组 nums , 有一个大小为 k 的滑动窗口从数组的最左侧移动到数组的最右侧
 * 你只可以看到在 滑动窗口 k 内的数字 , 滑动窗口每次只向右移动一位
 * 返回 滑动窗口的最大值
 */



 /**
  * 解法一 :暴力枚举 时间复杂度 O(n2) 空间复杂度 O(n)
  * note : 这方法太慢了
  */

  function SlidingWindow (nums) {
      let MaxArray = [] ;
      for(let i = 0 ; i <= nums.length - k ; i ++) {
          let max = Math.max(nums[i], nums[i+1] ,nums[i+2])
          MaxArray.push(max)
      }
      return MaxArray ;
  }

  

 // 暴力枚举2
 function SildingWindow2 (nums ,k) {
     let max = - Infinity ;
     let MaxArray = [] ;
    for(let i = 0 ; i <= nums.length - k ; i++) {
        for(let j = i ; j < i + k ; j++) {
            if(nums[j] > max) {
                max = nums[j]
            }
        }
        MaxArray.push(max)
    }
    return MaxArray ;
 }
 let nums = [1, 3 , -1 ,-3,5 ,3, 6, 7] ;
 let k = 5 ;
console.log(SildingWindow2(nums ,3))

/**
 * 解法二 : 一个滑动窗口可以看成是一个队列
 */

 function SlideWindowQueue (nums , k) {
     // 把窗口看做队列
    let queue = [] ;
    for(let i = 0 ; i <= nums.length - k ; i++) {
        queue.push(nums[i])
        if( ((i + 1)%k) === 0 ) {
            
        }
    }
 }



 /**
  * 解法三: 双端队列
  */

  function maxSlidingWindow (nums , k) {
      
    for(let i = 0 ; i <= nums.length - k ; i ++) {

    }
  }