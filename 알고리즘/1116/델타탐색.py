
      # 상  하  좌  우
dr = [-1, 1, 0, 0]
dc = [0, 0, -1, 1]



matrix = [[3,7,9],
          [4,2,6],
          [8,1,5]]

r, c = 1, 1
# matrix[r-1][c] 위쪽

# d는 방향을 의미함. 상하좌우 0~3
for d in range(4):
  nr, nc = r+dr[d], c+dc[d]
  # 유효한 좌표인지 꼭 확인
  if 0 <= nr < 3 and 0 <= nc < 3:
    print(matrix[nr][nc])

  r, c = nr, nc  #이동


# 새로운 검토할 좌표는 위쪽
nr, nc = r+dr[0], c+dc[0]
matrix[nr][nc]

# nr, nc = r+dr[2], c+dc[2] // 4


# 모서리 부분에서는 인덱스 에러
# 좌표 만든 다음에 유효한 좌표인지 꼭 검토
# 좌표를 찍어보는 것은 얼마든지 가능


#상하좌우면 델타탐색 생각해 / 인접/..

