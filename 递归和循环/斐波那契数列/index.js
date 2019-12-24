/**
 * 斐波那契数列
 */

 function Fibonacci (n) {
     if (n <= 0) return 0
     if( n=== 1) return 1;
     return Fibonacci(n - 1) + Fibonacci(n - 2)
 }

//  console.log(Fibonacci(100))

function f(n) {
    let first = 1;
    let second = 1;
    for(let i = 3 ; i <= n ; i ++) {
        sum = first + second;
        first = second;
        second = sum;
    }
    return sum;
}

// console.log(Fibonacci(300))
console.log(f(300))