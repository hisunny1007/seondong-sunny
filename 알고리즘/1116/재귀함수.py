import sys
sys.setrecursionlimit(10**9)
# 뎁스를 인위적으로 늘리겠다. 에러 안 남.
# 재귀의 한계를 조절,,

def find(depth):
  # 종료 조건
  if depth == 100:
    print("찾았다!")
    return 
  
  # 탐색 로직
  print(f'탐색하는 중...깊이는 {depth}') 

  find(depth+1)

  print(f'올라가는 중... 깊이는 {depth}')

find(0)

# 123455..100...99....10..1