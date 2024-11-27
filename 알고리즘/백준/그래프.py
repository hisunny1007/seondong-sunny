# # # 0~6
# # # [0] * 6
# # # 0 -1
# # # *0-4
# # # 1 -2
# # # 3-6
# # # 4 -1
# # # 4 -3
# # # 6-5
# # # v=7
# # # e = 7

# # V = int(input())
# # E = int(input())

# # # *빈판 만들어서 배치하기
# # # (인접행렬)
# # v*v 2차원 빈판
# # 0으로 집어넣고 여기서 정점-간선 갈 수 있는 것만 1로 표시

# # [
# # [],
# # [],
# # [],
# # [],
# # [],
# # [],
# # [],
# # [],
# # [],
# # [],
# # ]
# # # adj_matrix =
# # [
# #   [0, 0,0],
# #   [0, 0,0],
# #   [0, 0,0],
# # ]

# # adj_matrix = [ [0]*V for _ in range(V)]
# # 3*3

# # for _ in range(E):
# #   s, e = map(int,input().split())
# #   adj_matrix[s][e]=1

# #   행ㄹ렬보다 리스트가 더 빠름
# #   V = int(input())
# # E = int(input())

# # # 1. 빈판 만들기
# # # 정점 개수 V개에 맞추어 V * V 크기의 0으로 가득찬 2차원 리스트를 제작한다.
# # adj_matrix = [[0]* V for _ in range(V)]

# # # 2. 간선 정보 입력받기
# # # s, e로 입력받아 s에서 e로 이동할 수 있음을 나타낸다.
# # for _ in range(E):
# #     s, e = map(int, input().split())
# #     adj_matrix[s][e] = 1

# # print(adj_matrix)

# #     0  1 2  3  4  5  6
# # #0 [[0, 1, 0, 0, 1, 0, 0], 
# # #1  [0, 0, 1, 0, 0, 0, 0], 
# # #2  [0, 0, 0, 0, 0, 0, 0], 
# # #3  [0, 0, 0, 0, 0, 0, 1], 
# # #4  [0, 1, 0, 0, 0, 1, 0], 
# # #5  [0, 0, 0, 0, 0, 0, 0], 
# # #6  [0, 0, 0, 0, 0, 1, 0]]


# V = int(input())
# E = int(input())

# # 빈판 뭐? v*v

# # adj_matrix = [ [0]*V  ] 
# # # v=3 [ [0,0,0] ]
# # print(adj_matrix)

# adj_matrix = [[0]*V for _ in range(V)]

# for _ in range(E):
#   s, e = map(int, input().split())
#   adj_matrix[s][e] = 1
# print(adj_matrix)

# # print(adj_matrix)

V = int(input())
E = int(input())

# 인접 행렬은 0판으로 만들고
# 인접 리스트는 빈판으로 만들기

adj_lst = [ [] for _ in range(V)]
print(adj_lst)

V = int(input())
E = int(input())

# 1. 빈판 만들기
# 정점 개수 V개에 맞추어 V개의 빈 리스트가 들어있는 2차원 리스트를 제작한다.
adj_lst = [[] for _ in range(V)]

# 2. 간선 정보 입력받기
# s, e로 입력받아 s에서 e로 이동할 수 있음을 나타낸다.
for _ in range(E):
    s, e = map(int, input().split())
    adj_lst[s].append(e)

print(adj_lst)
       0   1   2   3     4       5   6
# [[1, 4], [2], [], [6], [1, 5], [], [5]]