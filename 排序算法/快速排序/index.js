/**
 * 快速排序
 */


 // 1 . 使用两个数组进行存放

 function quickSort1 (arr) {
     if(arr.length < 1) return arr;
     var pivot = arr[0] ; // 基准
     var left = [] ;
     var right = [] ;
     for(var i = 1 ; i < arr.length ; i++) {
         if(arr[i] < pivot) {
             left.push(arr[i])
         } else {
             right.push(arr[i])
         }
     }
     return quickSort(left).concat([pivot],quickSort(right))
 }

//  let arr = [2,1,5,8,3,7,4,6,9];
//  console.log(quickSort(arr))



 // 2. 使用交换 (正宗)

 function quickSort2 (arr , low ,high) {
     var key = arr[low] ; // 设置最后一个元素为基准
     var start = low ;
     var end = high ;
     while(start < end) {
        while(start < end && arr[end] >= key) end--;
        if(arr[end] <= key) {
            // 交换两个元素
            var temp = arr[end] ;
            arr[end] = arr[start];
            arr[start] = temp ;
        }
        while(start < end && arr[start] <= key) start ++ ;
        if(arr[start] >= key) {
            temp = arr[start] ;
            arr[start] = arr[end] ;
            arr[end] = temp ;
        }
     }
     return arr;
 }
 
//  console.log(quickSort)

 // 3. 更好理解的快速排序
 function quickSort3 (arr , left , right) {
     if(arr.length < 1) return arr;
     var start = left ;
     var end = right ;
     var pivot = arr[left] ; // 基准
     while(start < end) {
         while(arr[end] >= pivot) end-- 
         while(arr[start] <= pivot) start++;
         // 交换两个元素
         if(start < end) {
             temp = arr[start] ;
         arr[start] = arr[end] ;
         arr[end] = temp
         }
     }
     // 最终将基准数归位
     arr[left] = arr[start] ;
     arr[start] = pivot ;
     quickSort3(arr,left,start - 1)
     quickSort3(arr,start + 1,right)
 }

 var arr = [12,20,5,16,15,1,30,45,23,9]
 console.log(quickSort3(arr,0,arr.length -1))