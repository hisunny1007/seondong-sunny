from itertools import permutations

my_lst = ["A", "B", "C"]
visited = [0, 0, 0]


def DFS(depth):
    if depth == 3:
        return

    for nxt in range(3):
        if not visited[nxt]:
            visited[nxt] = 1
            DFS(depth + 1)
            visited[nxt] = 0


# 재귀함수를 이용한 순열 직접 구하는 코드
