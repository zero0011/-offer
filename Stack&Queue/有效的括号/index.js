/**
 * 有效的括号
 */


 //解法一:栈
 
 function isValid(str) {
     // 辅助栈
    let stack = [] ;
    for(let item of str) {
        if(item === '(') {
            stack.push(item);
        } else if(item === ')') {
            if(stack.length) {
                stack.pop()
            }
            else {
                return false;
            }
        }
    }
    if(stack.length === 0) return true;
    else  return false;
 }

 let str = '())(';

//  console.log(isValid(str))



 // 解法二: 优化 ,计数
function isValid2(str) {
    // 边界条件
    if(str.length === 1 || str === null) return true;
    let num = 0 ;
    for(let item of str) {
        if(item === '(') {
            num ++ ;
        } else if(item === ')'){
            if(num === 0) return false;
            num --;
        }
    }
    return num === 0?  true : false;
}

let str2 = '()()()'
console.log(isValid2(str2))