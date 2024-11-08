import sys
input = sys.stdin.readline
#백준 문제 풀 때 그냥 박아놔, 계산 빨리 됨
# 수찾기(검색)

# 1. 입력받기
N = int(input())
A = set(map(int, input().split()))
M = int(input())
B = list(map(int, input().split()))

# 2. 아래에 있는 배열을 선형으로 탐색하면서
for num in B:
  # 위에 있는 배열에 있다면? => 1 출력
  if num in A:
    print(1)
  # 없다면? => 0 출력
  else:
    print(0)


#검색 많이 돌릴 거니까 집합, 해시자료 구조로 사용

# 집합 자료 구조?


# 위 배열 : 집합
# 아래 배열 : 순서대로 탐색해야 하기 때문에 리스트


#range 연속된 정수 목록 만들어줌
for tc in range(1, T):
  N = int(input())
  nums = list(map(int, input().split()))
  4 1 5 2 3 
  1 3 7 9 5
