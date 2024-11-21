# # 정점 개수
# # 간선 개수

# # 간선 정보 

# # 인접 행렬, 인접 리스트 둘다 로직 똑같음

# # // 1. 빈판 만들기
# # 2. 빈판에 입력

# 인접 행렬 [s][e]= 1
# 인접리스트 [s].append(e)

# 0번 생략하고 정점 번호 1번부터인 경우

V = int(input())
E = int(input())

# 1. 빈 판 만들기
adj_matrix = [[0] * (V+1) for _ in range(V+1)]
# 0번쨰 행,열은 안 쓸 거임.

# 2. 간선정보 입력받기
for _ in range(E):
  s, e = map(int, input().split())
  adj_matrix[s][e] = 1 
  # 이건 양방향 그래프이기 때문에 e->s도 가능
  adj_matrix[e][s] = 1


# 인접 리스트로도 만들기
adj_lst = [[] for _ in range(V+1)]

for _ in range(E):
  s, e = map(int, input().split())
  adj_matrix[s].append(e) 
  # 이건 양방향 그래프이기 때문에 e->s도 가능
  adj_matrix[e].append(s)


# 1. 인접 리스트 -탐색 빠르다
(한 눈에 보일 수 있으니까!!! )
// 그래프 탐색에서는 리스트 하는게 더 빠름
v*v보다 작으니까 공간도 훨씬 효율적임


# 2. 인접 행렬 - 방향 전환이 쉽다
// 전치하면 모든 방향이 반대가 됨

방문예정지로 스택ㄷ을 활용하는 기법-dfs
경로를 이루면서 탐색
dfs는 그래프탐색할때 스택을 어쩌구,,


최단 거리 알고리즘-bfs