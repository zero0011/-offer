## 合并两个排序的链表
    输入两个递增排序的链表, 
    合并这两个链表并使新链表中的结点仍然是按照递增排序的。
    比如:
    1 -> 3 -> 5 -> 7
    2 -> 4 -> 6 -> 8
    合并为
    1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8


## 思路
    一是在写代码之前没有对合并的过程想清楚, 最终合并出来的链表要么中间断了, 要么并没有做到递增排序
    二是代码在鲁棒性方面存在的问题, 程序一旦有特殊的输入(如空链表)就会崩溃

    首先分析合并两个链表的过程
    我们的分析从合并两个链表的头结点开始。
    1. 链表1的头结点的值小于链表2的头结点的值,因此链表1的头结点将会是合并后链表的头结点
    2. 在剩余的结点中,链表2的头结点的值小于链表1的头结点的值,因此链表2的头结点是剩余结点的头结点,把这个结点和之前已经合并好的链表的尾结点连接起来。