import math
class Solution:
    def __init__(self):
        '''
        '''
    def power_z(self,d,n):
        if n == 0 : return 1
        if n == 1 : return d
        tmp = power_z(d , abs(n)/2) 
        # print tmp
        if n > 0:
            if n % 2 == 1: # n 为 奇数
                return tmp*tmp*d
            else: # n 为偶数
                return tmp * tmp
        else:
            if n % 2 ==1:
                print (1 /(tmp*tmp*d))
                return (1 /(tmp*tmp*d))
            else:
                return (1/(tmp*tmp))

solution = Solution()
solution.power_z(2,1000)