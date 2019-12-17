/**
 * @description { 将一个字符中的空格替换成 %20 }
 */

 function replaceSpace (str) {
    let StrCopy = '' ;
    let arr = Array.from(str)
    for(let item of arr) {
        if(!item) {
            StrCopy.push('%20')
        } else {
            StrCopy.push(item)
        }
    }
    return StrCopy ;
 }

 let str = 'A B' ;
//  console.log(str[1])
 console.log(replaceSpace(str))

// console.log(' ' === ' ')