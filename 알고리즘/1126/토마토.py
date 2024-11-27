
# 백준 토마토

import sys
input = sys.stdin.readline
from collections import deque

#델타 세팅
dr = [-1, 1, 0, 0]
dc = [0, 0, -1 , 1]

M, N = map(int, input().split())
box = [list(map(int, input().split())) for _ in range(N)]
# 이차원 리스트 입력 - N줄에 걸쳐서 받아줌

# BFS
# 세팅(출발지, 기록지, 예정지)
# visited = set()
queue = deque()
for r in range(N):
  for c in range(M):
    if box [r][c] == 1:
      queue.append((r,c,0))

# 예정지가 빌 때까지
while queue:
  # 방문
  r, c, cnt = queue.popleft() 
  # // 가장 먼저 들어온거 왼쪽에서 꺼내줌

  # 탐색 - 델타 탐색(인접한 곳으로 익어나가니까)
  # 네 방향을 확인하며
  for d in range(4):

    # 새로운 좌표를 찍어보고
    nr, nc = r+dr[d], c+dc[d]
    # 유효한지 확인하고(범위, 안 익은 토마토인지(0이고 방문X))
    if 0 <= nr < N and 0 <= nc < M and not box [nr][nc]:
      # 유효하다면 방문 체크하고(visited or 원본변경)
      # 바로 원본변경으로
      box[nr][nc] = 1
      # 큐에 넣기
      queue.append((nr,nc,cnt + 1))

# cnt에는 거리가 얼마있는지 정보가 담겨있음
# bfs는 거리순으로. 출발지에서 0으로부터 거리가 

# 출발지로부터 가장 멀리 떨어진 곳의 거리가 들어감

# 다 익었는지 확인
# for r in range(N):
#   for c in range(M):
#     if box[r][c] == 0:
#       cnt = -1
#       break


#     // 저 과정 생략하려고 파이썬 문법써도 ㅇㅋ
# 박스에서 바로 일차원리스트 꺼냄

for row in box:
  if 0 in row:
    cnt = -1
    break
  
# 다 익었다면 얼마나 걸렸는지 확인
print(cnt)