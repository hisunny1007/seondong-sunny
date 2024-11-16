# 25304번 영수증
# 첫째 줄에는 영수증에 적힌 총 금액
# $X$가 주어진다.

# 둘째 줄에는 영수증에 적힌 구매한 물건의 종류의 수
# $N$이 주어진다.

# 이후
# $N$개의 줄에는 각 물건의 가격
# $a$와 개수
# $b$가 공백을 사이에 두고 주어진다.

# X = int(input())
# N = int(input())
# a, b = map(int, input().split())
# c, d = map(int, input().split())
# e, f = map(int, input().split())
# g, h = map(int, input().split())

# if X == (a*b + c*d + e*f + g*h):
#   print("Yes")
# else:
#   print("No")

# for a, b in range(N+1):
#   sum = a * b
#   a[0]*b[0]
#   a[1]*b[1]
#   a[2]*b[2]
#   a[3]*b[3]
#  idx 0~3 / range 4

#TypeError: 'int' object is not subscriptable
# 정수형(int) 데이터에서 리스트나 문자열처럼
# 인덱싱 또는 슬라이싱 불가
# 정수는 인덱싱 불가

X = int(input())
N = int(input())

# a = [20000, 30000, 10000, 5000]
# b = [5, 2, 6 ,8]

a, b = map(int, input().split())

sum = 0
for idx in range(N):
    # sum = sum + (a[idx] * b[idx])
    sum += a[idx] * b[idx]
    if X == sum:
        print("Yes")
    else:
        print("No")
