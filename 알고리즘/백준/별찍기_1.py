# 2438번 별찍기-1
# https://www.acmicpc.net/problem/2438

# Q. 첫째 줄에는 별 1개, 둘째 줄에는 별 2개, N번째 줄에는 별 N개를 찍는 문제

N = int(input())
i = 1

for i in range(i,N+1):
  print("*" * i)



N = int(input())

star = 1
for star in range(N+1):
  print("*" * star)

# 이거 왜 공백이 생기나요?

# print("*" * 1)
# print("*" * 2)
# print("*" * 3)
# print("*" * 4)
# print("*" * 5)
