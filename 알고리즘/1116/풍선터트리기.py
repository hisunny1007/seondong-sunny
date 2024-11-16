T = int(input())
# 델타 세팅
테스트케이스만큼 반복시켜줘

for tc in range(1, T+1):
  N, M = map(int, input().split())
  matrix = [list(map(int, input().split())) for _ in range(N)]
  # 정답 초기화
  N줄에 걸쳐서 받을 거니까 꼭 행을 넣어줘야함

  # 순회하면서
    # tmp = 0
    # r, c에서 델타탐색(4방향)

    # ans 갱신

  # ans 출력