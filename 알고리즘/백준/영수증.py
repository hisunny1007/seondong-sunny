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

total = 0

for _ in range(N):
    a, b = map(int, input().split())
    total += a * b

if total == X:
    print("Yes")
else:
    print("No")

# e(N)의 특징:
# 0부터 N-1까지의 정수를 생성.
# 정확히 N번 반복.
# 따라서 range(N)은 N개의 데이터를 처리할 때 적합합니다.
# 다시 코드 확인: