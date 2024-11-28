cities = ['A', 'B', 'C']

# 각각의 depth에서 내가 abc중에서 어디를 방문할지
# depth는 0 1 2 
visited = [0,0,0]
ans = []

# // 모든 경로 탐색할 땐 내가 어디 뎁스에 있는지 확읺나ㅡㄴ게 중요함
def perm(depth):
  # 도시 세개를 방문하면 종료***
  if depth == 3:
    print(ans)
    return


  # 다음에 갈 곳을 탐색해서
  for idx in range(3):
    # 방문한 적이 없다면?
    if not visited[idx]:
      # 방문한 적 없으면 방문체크해줘
      # 방문표시하고
      visited[idx] = 1
      # 방문
      ans.append(cities[idx])
      perm(depth+1)

      # 방문 표시 해제****
      # 다른 경로에서 또 갈 수 있도록
      # 모든 경우의 수 파악 가능
      # 위에서 append한 거 pop 하고 1-0
      ans.pop()
      visited[idx] = 0


perm(0)
print(ans)
# 경로 하나만 탐색하고 끝
# 
#  

# 방문 표시 해제랑 맨 위 depth 조건 중요
# 3개 중에 2개 뽑는 경우의 수 depth == 2


# 가능한 모든 경우의 수 순열 -dfs로
