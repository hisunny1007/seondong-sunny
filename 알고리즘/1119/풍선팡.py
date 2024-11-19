# https://swexpertacademy.com/main/code/userProblem/userProblemDetail.do?contestProbId=AYYlGU56XOkDFARc&

T = int(input())
# 델타 세팅 (반복문 바깥에 만들어놓는게 좋음)
# 탐색 순서가 안 중요한 문제임
# 그냥 상하좌우로 짬
dr = [-1, -1, 0, 0]
dc = [0, 0 , -1, 1]

for tc in range(1, T+1):
  N, M = map(int, input().split())




  # n줄에 걸쳐서 1차원 리스트들이 공백을 기준으로 짤려서 들어옴
  # 일차원 리스트 하나 받아준다
  #  list(map(int, input().split()))
  matrix = [list(map(int, input().split())) for _ in range(N)] 
  #  N으로 행의 개수 들어옴

  #  초기 변수 세팅
  ans = 0

  #  matrix를 순회하면서(r,c)
  for r in range(N):
    for c in range(M):

    # tmp = matrix[r][c]
    # 너가 찍은 그 값부터 
      tmp = matrix[r][c]
    # 그 칸을 기준으로 델타탐색
    # 네방향 다 볼거야
      for d in range(4):
      # 좌표 찍기
        nr, nc = r+dr[d], c+dc[d]
      # 유효성 검사 필요함 (해당 좌표 유효한지)
        if 0 <= nr < N and 0 <= nc < M:
          
      # tmp에 더해주기 // 유효한값으로 더해
      # (0,0) 우 (0,1) 하 (1,0) 더해짐
          tmp += matrix[nr][nc]
    # 정답 갱신 시도
      ans = max(ans, tmp)
  #  ans 출력
  print(f'#{tc} {ans}')


# 유효성 검사 왜 하냐면 모서리 부분에서 델타탐색하면 인덱스 에러 발생하기 때문임
# 엄청 커질 수록 모든 곳에서 유효성검사하기 비효율이니까
#  더 크게 패딩으로 덮어줌
# 행 길이를 (위아래 +1), 열도 (좌우 +1)
#  (N+2) (M+2)
# 둘러싸놓고 탐색은 원래값부터 함
# 이차원리스트 패딩 기법
# 어떤 값으로 덧대는지 문제에 따라 달라짐

