/**
 * 判断一个数是不是质数
 */
function isPrime(n) {
    for(let i = 2 ; i <= Math.sqrt(n); i ++) {
        if(n % i === 0) return false;
    }
    return true;
}

