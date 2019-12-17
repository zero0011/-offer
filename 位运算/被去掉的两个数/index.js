let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = [1,2,3,4,7,8,9,10]

let start1 = 0
let start2 = 0

for(let i = 0 ; i< arr1.length ; i++) {
    start1 ^= arr1[i]
}

for(let j = 0 ; j< arr1.length ; j++) {
    start2 ^= arr2[j]
}

let OXR = start1 ^ start2 ;

function findNumberIndexOf1 (OXR) {
    let count = 1 ;
    while(OXR) {
        if(OXR & 1) {
            return count
        }
        OXR >>>= 1 ;
        count++ ;
    }
}

let index = findNumberIndexOf1(OXR)

function solution(arr1 ,arr2) {
    let num1 = 0 ;
    let num2 = 0 ;
    let sum = arr1.concat(arr2)
    for(let i = 0 ; i < sum.length ; i++) {
        
    }
}

