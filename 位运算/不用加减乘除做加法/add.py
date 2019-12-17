'''
不用加减乘除做加法
'''

class Solution :
    def add(self,num1,num2):
        sumNumber =  num1 ^ num2
        carry = (num1 & num2) << 1
        num1 = sumNumber
        num2 = carry
        while(num2 != 0):
            sumNumber = num1 ^ num2
            carry = (num1 & num2) << 1

            num1 = sumNumber
            num2 = carry
            return num1 


solution = Solution()
print(solution.add(10,13))