/**
 * 最长有效括号
 * 给定一个只包含 '(' 和 ')' 的字符串 ,
 *  找出最长的包含有效括号的子串的长度
 */


 // 1. 暴力法
 function isValid3 (str) {
    var len = 0 ;// 长度
    for(let i = 0 ; i < str.length ; i ++) {
        var num = 0 ;
        for(let j = i ; j < str.length ; j ++) {
            if(str[j] === "(") {
                num ++;
            } else if( str[j] === ")") {
                if(num === 0) break;
                num--;
            }
        }
        
    }
 }



 let str = ')()())';

