'''
计算一个数的 n 次方
给定一个数 d 和 n , 如何计算 d 的 n 次方? 例如: d = 2 , n =3 的 n c次方位 为  8
'''

# 说白了 , 就是实现 Math.pow() 

def power (d , n):
    if n == 0: return 1
    if n == 1: return d
    res = 1
    if n > 0:
        i = 1
        while (i <= n):
            res *= d
            i+=1
        return res
    else:
        i = 1
        while i <= abs(n):
            res = res / d
            i+=1
        return res


