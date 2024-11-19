# https://swexpertacademy.com/main/code/problem/problemDetail.do?contestProbId=AV5PobmqAPoDFAUq
T= int(input())

# 델타 세팅(우-하-좌-상)
dr = [0, 1, 0, -1]
dc = [1, 0, -1, 0]

#  순서 중요함!! 우 하 좌 상으로 
for tc in range(1, T+1):
  N = int(input())

  # N*N짜리 빈 판 제작
  snail = [[0]*N for _ in range(N)]
  # print(snail)

#   ? 인덱스 벗어날 때
# 이미 방문한 곳

  # 초기값 세팅
  r, c = 0, 0
  d = 0
  # d가 방향
  # 방향의 순서가 있음 : 우 -> 방향 틀어 -> 하
  # -> 좌 -> 상 에서 더이상 갈 곳 없으면 우로 다시 틀어

  # 1부터 N*N까지 반복하며
  for num in range(1,N**2 + 1):
    #  r, c에 숫자 입력
    snail[r][c] = num
    
    # 새로운 좌표 찍기(nr, nc)
    nr, nc = r+dr[d], c+dc[d]

    # 좌표 유효성 검사(범위, 방문 여부)
    if 0 <= nr < N and 0 <= nc < N and not snail[nr][nc]:
      # 조건 3까지 평가가 넘어왓다는 건 조건1.2.가 모두 true
    # 이미 방문한 곳은 더이상 0이 아니고 다른 숫자임
    # 이미 어떤 숫자가 입력이 되어있다면 그 좌표로 이동하묜 안 돼
      # 유효? => 이동
      r, c = nr, nc
      continue

    # 유효X => 방향 전환 => 새로운 좌표 이동
    # 0123이 계속 반복되도록 
    d = (d+1) % 4
    nr , nc = r+dr[d], c+dc[d]
    r, c = nr, nc
    # 방향을 전환하기만 하면 유효한 곳임

print(f'#{tc}')
# 한 줄씩 뽑아서 출력
for line in snail:
  print(*line)




