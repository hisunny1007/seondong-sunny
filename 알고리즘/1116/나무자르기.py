# 정확히 구할 수 없음

# 가능한 끝까지 지속
# 0~ max(trees) O(N) 시간복잡도로도 시고나초과나옴

# 범위 겁나 커 -? 이분탐색 한번 생각해봐

import sys
input = sys.stdin.readline

N, M = map(int, input().split())
trees = list(map(int, input().split()))

# 초기값 세팅(l, r, c)
l , r = 0, max(trees)
c = (l + r)//2 
# 몫으로 취해라. 정수로 해야지

# 반복을 하며(가능한이 l < r)
  # c를 가지고 가져갈 수 있는 나무 길이를 계산
while l <= r:
  length = 0
  for tree in trees:
    if tree > c:
      length += tree - c
      # 지금 절단기 높이에서 자를 수 있는 높이로 length

  
  # length == M
  if length == M:
    break

  # length > M
  elif length > M:
    # l값을 갱신(c+1)
    # 위쪽 절반으로 범위를 축소시키자
    l = c + 1

  # length < M
  # 너무 조금 잘라으면 절단기 높이 내려줘야함
  elif length < M:
    # r값을 갱신(c-1)
    r = c - 1

  # 새로운 c를 계산
  c = (l+r)//2

print(c)