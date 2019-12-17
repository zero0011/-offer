/**
 * @description { 栈的压入和 弹出序列}
 * @问题 : {输入两个整数序列 , 第一个序列表示栈的压入顺序,
 * 请判断第二个序列是否为该栈的弹出序列。}
 * @返回值 : false / true
 */

 function IsPopOrder (PushStack , PopStack) {
    // 辅助栈
    let help = [] ;
    let j = 0 ;
    let i = 0 ;
    while(!help.length) {
        if(i < PushStack.length) {
            help.push(PushStack[i])
            i++ ;
        }
        // 判断栈顶元素 是否为 PopStack 的第一个元素
        if(help[help.length - 1] === PopStack[j]) {
            help.pop()
            j++ ;
        }
        // 如果栈为空 , 则表示 true
    }
    return !help.length ? true : false;
 }

 let PushStack = [1 , 2 , 3 , 4 , 5] ;
 let PopStack = [4 , 5 ,3 , 2 , 1] ;

 console.log(IsPopOrder(PushStack , PopStack))