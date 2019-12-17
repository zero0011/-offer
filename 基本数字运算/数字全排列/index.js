/**
 * 数组的全排列
 */

 function Permutations(arr) {
    for(let i = 0 ; i < arr.length ; i ++) {
        for(let j = 0 ; j < arr.length ; j ++) {
            for(let k = 0 ; k < arr.length ; k++) {
                if(arr[i]!==arr[j] && arr[i]!==arr[k] && arr[j]!== arr[k]) {
                    console.log([arr[i],arr[j],arr[k]]);
                }
            }
        } 
    }
 }

 let arr = [1,2,3];
//  Permutations(arr);


 /**
  * 递归实现全排列
  */

 function permAlone(string) {
    function _perm(str) {
        // 跳出条件
        if (str.length < 2) return str;
        var permutations = [];
        for (var i = 0; i < str.length; i++) {
            // 获取开头的字符串和剩余字符串
            var start = str[i];
            var remaining = str.slice(0, i) + str.slice(i + 1, str.length);
            // 根据通过剩余字符串的全排列，生成前一次的全排列。注意 _perm(remaining) 是一个数组
            for (var permutation of _perm(remaining)) {
                permutations.push(start + permutation);
            }
        }
        return permutations;
    }
}

let str = "abc";
// console.log(permAlone(str));


/**
 * 字符串的全排列
 */

 function rank(data,step) {
   if(data.length === step + 1) {
       if(data[data.length - 1] % 2 === 0) console.log(data)
       return 
   }  
   else {
       for(let i = step ; i < data.length ; i ++) {
          [ data[step] , data[i] ] = [data[i] , data[step]] ;
          rank(data,step + 1) ;
          [ data[step] , data[i] ] = [data[i] , data[step]] ;
       }
   }
 }

 let data = [1,2,3];
//  console.log(data[0])
 rank(data,0)