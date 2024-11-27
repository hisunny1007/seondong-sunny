# 전체를 쭉 순회하면서
# 방문 => dfs / bfs
# 인접해있는 곳 전부 확인
#  해당 영역 안의 양, 늑대의 수 확인
#  한번 다 훑고 나면 return 하기 직전에
# 양 늑대 수 중 하나만 남겨서 전체 양, 전체 늑대에 더해
# ..다음번 순회

# 완전 탐색이라 탐색의 순서가 중요한 문제는 아님


import sys
input = sys.stdin.readline

# 델타세팅
dr = [-1, -1, 0, 0]
dc = [0, 0, -1, 1]


# DFS
def DFS(r,c):
  # 출발지, 예정지, 임시양, 임시늑대
  stack = [(r,c)]
  visited.add((r.c))
  tmp_o, tmp_v = 0, 0

  # 예정지가 빌 때까지
  while stack:
    # 방문
    r, c = stack.pop()
    

    # 탐색 -델타 탐색(이차원 리스트이니까)
    # 4방향을 탐색하며
    for d in range(4):
      # 새로운 좌표를 찍어보고
      nr, nc = r+dr[d], c+dc[d]
      # 갈 수 있다면? (범위조건, 울타리X, 방문X)
      if 0 <= nr < R and 0 <= nc < C and field[nr][nc] != "#' and (nr, nc) not in visited:
        # 양인지, 늑대인지
        if field[nr][nc] == 'o':
          tmp_o += 1
        elif field[nr][nc] == 'v':
          tmp_v += 1
        # 방문체크하고
        visited.add((nr,nc))
        # 예정지에 담기
        stack.append((nr,nc))
    # 임시양, 임시늑대 비교해서 리턴
    if tmp_o > tmp_v:
      return tmp_o, 0
    else:
      return 0, tmp_v
    

R, C = map(int,input().split())
field = [list(input().rstrip()) for _ in range(R)]
# 행의개수만큼 리스트 반복할거야.

# 초기 세팅(기록지)
# DFS돌때마다 예정지 갱신. 기록지는 이차원 리스트 전체가 공유하는 것임
visited = set()
o_cnt, v_cnt = 0, 0



# field를 순회하며,
for r in range(R):
  for c in range(C):
  #  울타리도 아니고, 방문한 적도 없다면?
    if field[r][c] != '#' and (r,c) not in visited:
      # 방문 + DFS
      tmp_o, tmp_v = DFS(r,c)
      # 결과를 전체 양, 늑대 개수에 반영
      o_cnt += tmp_o
      v_cnt += tmp_v