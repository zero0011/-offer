function AddFromToN_Recursive(n) {
    return n <= 0 ? 0 : n + AddFromToN_Recursive(n-1)
}

console.log(AddFromToN_Recursive(100))

function AddFrom1ToN_Iterative(n) {
    let res = 0;
    for(let i = 1; i <= n ; i++) {
        res+= i;
    }
    return res;
}

console.log(AddFrom1ToN_Iterative(100))