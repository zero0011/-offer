## 关于位运算的一些算法
    
位运算是把数字用二进制表示之后,对每一位上 0或者1的运算。位运算相关的题目一般也经常出现在面试中。下面我们来介绍一些关于位运算的题目

说明本章同时使用了python和 js代码

## 位运算介绍
平时的数值操作,其实是要先转换为二进制,计算机才能知道你输入的是什么的？位运算是底层的运算操作,所以速度往往是最快的(相比四则运算),位运算大概分两类 : ** 位逻辑运算符 **  **位移运算符**
### 位逻辑运算符 
& 与 <br>
| 或  <br>
~ 取反<br>
^ 异或

### 位移动运算符
<< 右移<br>>> 左移 <br>>>> 无符号右移 <br>

**好,show me code ,让我们进入实战**
## 出现一次的数
题目：在其他数都出现两次的数组中找到只出现一次的那个数
要求:时间复杂度 O(N) 空间复杂度O(1)

要求空间复杂度为O(1) 也就是说,只能用有限的变量,那该怎么做呢？在不知道位运算之前可能已经把循环遍历写出来了,但题目要去空间复杂度为 O(1),所以不能用额外的空间记录出现的次数。<br>
仔细看题目,**其他数都是出现两次**,只有一个数出现一次<br>
在解决这问题前,我们先了解一下**异或^** 运算
#### 异或运算
二进制中 两个位 相同为 0 , 相异为 1<br>
**规律1**:任何整数 n 与 0 异或总等于其本身<br>
**规律2**:多个数异或操作,遵循交换律和结合律<br>
**规律3**:任何整数 n 与其本身异或 为0

假设一个数组 <br>
Arr = [3,2,4,2,4,3,5,1,5]
如果把数组中所有元素都有异或
3 ^ 2 ^ 4 ^ 2 ^ 4 ^ 3 ^ 5 ^ 1 ^ 5 由于遵循交换律会等于<br>
3 ^ 3 ^ 4 ^ 4 ^ 2 ^ 2 ^ 5 ^ 5 ^ 1 == 1
这样我们就找到了那个数了

    function OnlyAppearOnce (arr) {
     let start = 0 ;
     for(let item of arr) {
         start = item ^ start ;
     }
     return start ;
 }
 
 
## 出现一次的两个数
是不是还挺简单的?热身结束,来一点升级版呗<br>
题目和上一题很像<br>
题目: 一个整形数组除了两个数字之外 , 其他的数字都出现了两次 , 
设计程序找出这两个只出现一次的数字 
要求 : 时间复杂度是 O(n) 空间复杂度 O(1)

只是把找一个数变成了找两个。好的,我们用一下上题的思路
假设一个数组 <br>
Arr = [3,2,4,2,4,3,5,1,5,7]<br>
异或一下 <br>
res = 3 ^ 3 ^ 4 ^ 4 ^ 2 ^ 2 ^ 5 ^ 5 ^ 1 ^ 7 == 1 ^ 7<br>
得到的结果是 我们要找的两个数的 异或结果 1 ^ 7 , 好像没什么用啊 , 我咋知道具体哪两数异或成它的<br>
我们分析一下, 既然是两个不同的数,那么异或结果一定不是 0,
也就是说 res 一定不为 0 , 我们把这个数转为 二进制 , 一定有些位是 1 , **我们可以找到其中 一个1的位置(就找最靠近右边的1吧),这很重要！**<br>
1 : 0001<br>
7 : 0111<br> 
6 : 0110
我们找到最右边的 index = 1 <br>
那么我们是不是可以以这个为依据 , 来分辨这两个数 , 第1位为 0 是1那个数 , 第1位为1 是7那个数 , 至于其他数会被自己都异或为 0<br>
**OK,show me code**

    function FindNumsAppearOnce (data) {
     let len = data.length ;
    if(len < 2) return ;

    // get num1 ^ num2 
    let res = 0 ;
    for(let i = 0 ; i < len ; i++) {
        res = res ^ data[i]
    }

    // get index of the first bit , which is 1 in res
    let indexOf1 = FindFirstBitIs1(res) ;

    let num1 = num2 = 0 ;
    for(let j = 0 ; j < len ; j++) {
        // divide the numbers in data into two groups
        // the indexOf1 bit of numbers in the first group is 1
        // while in the second group is 0
        if(IsBit1(data[j] ,indexOf1)) {
            num1 ^= data[j]
        } else {
            num2 ^= data[j]
        }
    }
    return [num1 , num2]
    }
     // Find the index of first bit which is 1 in num 
    function FindFirstBitIs1(num) {
     let indexBit = 0 ;
     while ((num & 1) == 0) {
         num >>= 1 ;
         indexBit ++ ;
     }
     return indexBit ;
    }
    // Is the indexBit of num 1 ?
    function IsBit1(num , indexBit) {
        num = num >> indexBit ;
        return (num & 1) ;
    }
## 二进制中1的个数
输入一个整数 , 输出该二进制表示中 1 的 个数 .<br>其中负数用 补码表示