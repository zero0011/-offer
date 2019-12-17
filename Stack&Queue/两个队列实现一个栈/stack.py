'''
用两个队列实现一个栈
'''
# python

class Solution:
    def __init__(self):
        '''
        initialize your data structure here
        '''
        self.queue1 = [] # 压入队列
        self.queue2 = [] # 弹出队列
    def push(self,x):
        '''
        :type x : int
        :rtype : void
        '''
        # 哪个队列不为空 , 就 push到哪个队列
        if(len(self.queue2)):
            self.queue2.append(x)
        else:
            self.queue1.append(x)
    def pop(self):
        '''
        :rtype : void
        '''
        #如果栈为 空 , 则报错
        if(not len(self.queue1) and not len(self.queue2)):
            print('stack is empty')
        # 从非空队列 依次转移到 空队列 , 直到非空队列只剩下一个元素
        # queue2 为空
        if(not len(self.queue2)):
            while(len(self.queue1) != 1):
                self.queue2.append(self.queue1.pop(0))
            return self.queue1.pop(0)
        
        # queue1 为空
        elif (not len(self.queue1)):
            while(len(self.queue2) != 1):
                self.queue1.append(self.queue2.pop(0))
            return self.queue2.pop(0)


solution = Solution()

print(solution.pop())
    