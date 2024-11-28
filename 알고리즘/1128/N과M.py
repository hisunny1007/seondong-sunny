# from itertools import permutations


# n개 중에서 m 개 뽑아서 순서 메기는 모든 경우의 수 검토해라.
# => 순열 구현
# 두개씩 뽑아서 줄을 세우는 모든 경우의 수

N, M = map(int,input().split())
nums = list(map(int,input().split()))
nums.sort()

# 사전 순으로 써라 이거 어떻게 해?
# => 1 7 / 1 8 / 1 9 
# => sort

visited = [0] * N
# 정점의 개수 N개까지 만들어라
ans = []

# // 모든 경로 탐색할 땐 내가 어디 뎁스에 있는지 확읺나ㅡㄴ게 중요함
def perm(depth):
  # M번 뎁스에 도달했을 때 ANS에 숫자 M개 잘 들어가있음
  # 종료***
  if depth == M:
    print(*ans)
    return


  # 다음에 갈 곳을 탐색해서
  for idx in range(N):
    # 방문한 적이 없다면?
    if not visited[idx]:
      # 방문한 적 없으면 방문체크해줘
      # 방문표시하고
      visited[idx] = 1
      # 방문
      ans.append(nums[idx])
      perm(depth+1)

      # 방문 표시 해제****
      ans.pop()
      visited[idx] = 0


perm(0)
print(ans)