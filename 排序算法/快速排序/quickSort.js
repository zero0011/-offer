/**
 * 快速排序
 */
function quickSort(arr,low,high){
    var key=arr[low];
    var start=low;
    var end=high;
    while(end>start){
        while(end>start&&arr[end]>=key) end--;
        if(arr[end]<=key){
            var temp = arr[end];
            arr[end]=arr[start];
            arr[start] = temp;
        }
        while(end>start&&arr[start]<=key) start++;
        if(arr[start]>=key){
            var temp = arr[start];
            arr[start]=arr[end];
            arr[end]=temp;
        }
    }
    if(start>low)  quickSort(arr,low,start-1);
    if(end<high)  quickSort(arr,end+1,high);
}



 
 console.log(arr)
var start = 0;
var end = arr.length-1;

// quickSort(arr,start,end)
// console.log(arr)


/**
 * 快速排序2
 */

 function quickSort2 (arr) {
    if(arr.length === 0) return arr;
    var key = arr[0];
    var left = [];
    var right = [];
    for(let i = 1 ; i < arr.length ; i ++) {
        if(arr[i] <= key) {
            left.push(arr[i]);
        } else if(arr[i] > key) {
            right.push(arr[i])
        }
    }
    return quickSort2(left).concat([key],quickSort2(right));
 }

//  let arr = [-1,2,-3,4,-5];
//  console.log(quickSort2(arr));