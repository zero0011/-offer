/**
 * @description { 栈的压入 和 弹出序列 }
 */

 function IsPopStack(PushStack , PopStack) {
     // 辅助栈
    let helper = [] ;
    let i = 0 ;
    let j = 0 ;
    while(helper.length) {
        while(PopStack[j] === helper[helper.length - 1]) {
            helper.pop() ;
            j++ ;
        }
        if(i < PushStack.length) {
           helper.push(PushStack[i]) ;
           i++ ; 
        }
        if(PopStack[j] !== helper[helper.length - 1]) {
            return false
        }
    }
    return true
 }

 let PushStack = [1,2,3,4,5]
 let PopStack = [4,3,5,1,2]

 console.log(IsPopStack(PushStack , PopStack))