/**
 * @description { 找出数组只出现一次的2个数 }
 * @description { 异或的巧妙应用 }
 */


 function FindNumsAppearOnce (data) {
     let len = data.length ;
    if(len < 2) return ;

    // get num1 ^ num2 
    let res = 0 ;
    for(let i = 0 ; i < len ; i++) {
        res = res ^ data[i]
    }

    // get index of the first bit , which is 1 in res
    let indexOf1 = FindFirstBitIs1(res) ;

    let num1 = num2 = 0 ;
    for(let j = 0 ; j < len ; j++) {
        // divide the numbers in data into two groups
        // the indexOf1 bit of numbers in the first group is 1
        // while in the second group is 0
        if(IsBit1(data[j] ,indexOf1)) {
            num1 ^= data[j]
        } else {
            num2 ^= data[j]
        }
    }
    return [num1 , num2]
 }

 
 // Find the index of first bit which is 1 in num 
 function FindFirstBitIs1(num) {
     let indexBit = 0 ;
     while ((num & 1) == 0) {
         num >>= 1 ;
         indexBit ++ ;
     }
     return indexBit ;
 }

 console.log(FindFirstBitIs1(-9))
 // Is the indexBit of num 1 ?
    function IsBit1(num , indexBit) {
        num = num >> indexBit ;
        return (num & 1) ;
    }



let arrTwice = [5,5,4,-2,3,4,3,1,1,-9] ;
// console.log(FindNumsAppearOnce(arrTwice))

console.log(1 ^ 7)