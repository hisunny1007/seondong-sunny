
# 델타 세팅

dr = [0, 0, -1, 1]
dc = [-1, 1, 0, 0]

matrix = [[3,7,9],
          [4,2,6],
          [8,1,5]]

# 현재 위치
r, c= 2, 2

# 4방향을 탐색하며
for d in range(4):
  # 일단 좌표를 찍고
  nr, nc =  r+dr[d], c=dc[d]
  # 유효한 좌표인지 검토
  if 0 <= nr < 3 and 0 <= nc <3:
    print(matrix[nr][nc])