'''
实现时间复杂度 O(1) 的最小栈
'''

# coding : utf8

class MinStack(object):
    def __init__(self , *args):
        '''
        initialize your data structure here
        '''
        self.stack = [] # 存放所有元素
        self.minStack = [] #存放每一次压入数据时 , 栈中的最小值
    
    def push(self ,x):
        '''
        :type x :int 
        :rtype : void
        '''
        self.stack.append(x)
        if not self.minStack or self.minStack[-1] >= x:
            self.minStack.append(x)
    def pop(self):
        '''
        rtype: void
        '''
        if self.minStack[-1] == self.stack[-1]:
            del self.minStack[-1]
        self.stack.pop()
    def top(self):
        '''
        :rtype:int
        '''
        return self.stack[-1]
    def getMin(self):
        '''
        :rtype: int
        '''
        return self.minStack[-1]

a = MinStack('1')
print(a.top())