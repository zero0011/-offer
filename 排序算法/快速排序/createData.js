/**
 * 创建数据
 */

 function createData (len) {
    let data = new Array(len);
    for( item of data) {
        let rand = Math.floor(Math.random() * len);
        item = rand ;
    }
    return data ;
 }

//  console.log(createData(100))


/**
 * js 实现数组的随机排序
 */

 function randSort(arr) {
     let len = arr.length;
     for(var i = 0  ; i <arr.length ; i ++) {
         var rand = parseInt(Math.random() * len--);
         
     }
 }


 var arr = [1,2,3];
arr.sort(function(){
    return Math.random() - 0.5;
})
console.log(arr);