# 중복 순열
# 방문지 필요없음. 다시 가도 되니까 굳이 체크할 필요 x

matrix = [list(input().split()) for _ in range(5)]

# print(matrix)

ans = set()

def perm(depth, r, c, num):
    if depth == 6:
        # 집합에 집어넣고 리턴
        ans.add(num)
        return

    # 다음에 갈 곳을 탐색해서(델타탐색)
      # 다음 좌표 찍어보고
      # 유효성 검사 후에(범위)

        # 재귀
        def

# 순회하며
  #  모든 칸에서 DFS/perm

