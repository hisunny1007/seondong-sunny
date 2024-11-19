# https://swexpertacademy.com/main/code/userProblem/userProblemDetail.do?contestProbId=AYYlGU56XOkDFARc&

T = int(input())
# 델타 세팅 (반복문 바깥에 만들어놓는게 좋음)
# 탐색 순서가 안 중요한 문제임
# 그냥 상하좌우로 짬
dr = [-1, -1, 0, 0]
dc = [0, 0 , -1, 1]

for tc in range(1, T+1):
  N, M = map(int, input().split())
  # 패딩
  # 1. (N+2) (M+2) 커다란 빈 판 제작 (0으로 가득 차 있는 빈 이차원 리스트)
  matrix = [[0] * (M+2) for _ in range(N+2)]
  # 0이 열 개수만큼 있는 일차원 리스트를 커다란 리스트로 집어넣을거야
  # print(matrix)
  # 2. 입력 받아서 한줄씩 교체
  for i in range(1, N+1): #N줄에 걸쳐서 한 줄로 입력 받음
    matrix[i][1:M+1] = list(map(int, input().split()))
  print(matrix)

#  초기 변수 세팅
  ans = 0

  #  matrix를 순회하면서(r,c)
  for r in range(1, N+1):
    for c in range(1, M+1):

    # tmp = matrix[r][c]
    # 너가 찍은 그 값부터 
      tmp = matrix[r][c]
    # 그 칸을 기준으로 델타탐색
    # 네방향 다 볼거야
      for d in range(4):
      # 좌표 찍기
        nr, nc = r+dr[d], c+dc[d]
      # tmp에 더해주기 // 유효한값으로 더해
      # (0,0) 우 (0,1) 하 (1,0) 더해짐
        tmp += matrix[nr][nc]
    # 정답 갱신 시도
      ans = max(ans, tmp)
  #  ans 출력
  print(f'#{tc} {ans}')

  

# 이차원 리스트 빈판 만들 때 이렇게 만들면 안 돼
# matrix = [[0]*(M+2)]*(N+2) 안되는거임
# 곱셈으로 만들면 안 되고 안에 있는 1차원 리스트 곱셈으로 만들고
# 리스트 FOR 반복문으로 만들어
# matrix = [[0]*3 for _ in range(4)]

