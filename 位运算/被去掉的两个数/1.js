/**
 * @问题 : 给你 1- 1000 个自然数 , 然后从中随机取掉两个, 
 * 再打乱顺序,要求只遍历一次,求出被去掉的两个数
 */

 /**
  * @description { 随机生成 0 到 max - 1 的值}
  */
 function random (max) {
    return Math.floor(Math.random() * Math.floor(max)) ;
 }

/**
 * @description { 洗牌算法 }
 * @description { 从数组中随机取出不同的元素(不重复)}
 * @description { 参数1:指定数组 , 参数2: 取出个数}
 */
function Shuffle (nums , number) {
    for(let i = 0 ; i < number ; i++) {
        let index = random(nums.length) ;
        [nums[index] , nums[nums.length - 1]] = [nums[nums.length - 1] , nums[index]] ;
        nums.length = nums.length - 1;
    }
    return [nums] ;
}

/**
 * @description { 打乱数组 }
 */
function upset(array) {
    let len = array.length ;
    //如果还有剩余元素
    while( len ) {
        // 随机出来一个下标
        var index = Math.floor( Math.random() * len-- )
        //随机出来的元素与最后一个元素交换
        [array[index] , array[len] ] = [ array[len] , array[index]  ]
    }
    return array ;
}


/**
 * @description { FindIndexOf1 }
 */
function FindIndexOf1(XOR) {
     indexOf1 = 0 ;
    while((XOR & 1) !== 1) {
        XOR >>= 1 ;
        indexOf1++ ;
    }
    return indexOf1 ;
}

/**
 * @description { IsIndexOf1}
 */
function IsIndexOf1 (data ,indexOf1) {
    let NewData = data >> indexOf1 ;
    return (NewData & 1) ;
}

 function FindTwice (nums) {
    // 异或 nums数组 
    let first = 0 ;
    for(let i = 0 ; i < nums.length ; i ++) {
        first = first ^ nums[i]
    }
    // 随机去除掉 2个元素
    let inter = Shuffle(nums ,2) ;
    // 然后打乱顺序
    let NewArray = upset(inter) ;
    let second = 0 ;
    for(let j = 0 ; j < NewArray.length ; j++) {
        second = second ^ NewArray[j] ;
    }
    let XOR = first ^ second ;
    let indexOf1 = FindIndexOf1(XOR) ;
    let num1 = 0 , num2 = 0 ;
    for(let k = 0 ; k < nums.length ; k++) {
        if(IsIndexOf1(nums[k] ,indexOf1)) {
            num1 = num1 ^ nums[k]
        } else {
            num2 = num2 ^ nums[k]
        }
    }
    return [num1 , num2]
 }

 let nums = new Array(10) ;
for(let i = 0 ; i < 10 ; i++) {
    nums[i] = i + 1 ;
}
 
 console.log(FindTwice(nums))

