# 숨바꼭질
from collections import deque

N, K = map(int,input().split())

# 구조화


# 세팅(출발지, 예정지, 기록지)
queue = deque([(N, 0)])
visited = set([N])


#  BFS (큐가 빌 때까지)
while queue:
  # 방문
  cur, cnt = queue.popleft()

  # K에 도착했는지 확인
  if cur == K:
    break

  # 탐색
  # 세 가지 점 중에 이동할 수 있음
  # 다음에 갈 수 있는 곳 확인하고
  for nxt in [cur+1, cur-1, cur*2]:
    # 유효하다면
    if 0 <= nxt < 140000 not in visited:
      # 방문체크하고
      visited.add(nxt)
      # 예정지에 담기
      queue.append((nxt, cnt+1))

print(cnt)