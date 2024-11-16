# 재귀함수를 이용해서 nums에서 가장 큰 수를 탐색
nums = [-5, 2, 7, -3, 2, 10, 8, 6, 5, -1]
# ans = 
# def my_func(idx,ans)

ans = -float("INF") 

def my_func(idx):
  global ans
  # 재귀의 종료 조건
  # idx가 len(nums)일 때 종료 // 10깊이에 도달했을 때 파고들지말고 그냥 종료해 리턴해 그 함수 f(10)만 종료
  if idx == len(nums): 
    return
  
  # 탐색 로직
  # nums[idx]와 ans를 비교하여 큰 값으로 갱신
  ans = max(nums[idx], ans)

  my_func(idx+1)
    
    
my_func(0)
print(ans)


# ans를 인자로 넣을 때

def my_func(idx, ans):
  # 재귀의 종료 조건
  # idx가 len(nums)일 때 종료 // 10깊이에 도달했을 때 파고들지말고 그냥 종료해 리턴해 그 함수 f(10)만 종료
  if idx == len(nums): 
    return ans
  
  # 탐색 로직
  # nums[idx]와 ans를 비교하여 큰 값으로 갱신
  ans = max(nums[idx], ans)

  return my_func(idx+1)
    
print(my_func(0, ans = -float("INF")))



def find(depth):
  # 종료 조건
  if depth == 10:
    print("찾았다!")
    return 
  
  # 탐색 로직
  print(f'탐색하는 중...깊이는 {depth}') 

  find(depth+1)

  print(f'올라가는 중... 깊이는 {depth}')

find(0)

