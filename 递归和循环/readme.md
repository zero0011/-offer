# 递归和循环
    如果我们需要重复地多次计算相同的问题,通常可以选择递归或循环两种不同的方式。
    递归是在一个函数的内部调用这个函数自身。
    而循环则是通过设置计算的初始值及终止条件,在一个氛围内重复计算。
    比如求
    1+2+3 ... + n
    我们可以用递归或者循环两种方式求出结果。

## 大概介绍
    递归虽然有简洁的优点,但它同时也有显著的缺点。
    除了效率外, 递归还有可能引起更严重的问题: 调用栈溢出。
    