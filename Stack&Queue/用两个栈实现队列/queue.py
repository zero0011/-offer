'''
两个栈实现队列
题目 : 用两个栈实现一个队列 。 队列的声明如下 : 请实现它的两个函数
    appendTail 在队列尾部插入结点
    deleteHead 在队头删除结点
'''

# python

class Solution(object) :
    def __init__(self):
        '''
        initialize your data structure here
        '''
        self.stack1 = [] #入队栈
        self.stack2 = [] #出队栈
    def appendTail(self,x):
        '''
        :type x : int
        :rtype : void
        '''
        self.stack1.append(x)
    def deleteHead(self):
        '''
        rtype : int
        '''
        while(len(self.stack1)):
            self.stack2.append(self.stack1.pop())
        if(len(self.stack2) == 0):
            print('queue is empty!')
        return self.stack2.pop()


# 测试
solution = Solution()
solution.appendTail(1)
solution.appendTail(3)
solution.appendTail(-2)
print(solution.deleteHead())