
# 3을 문자가 아닌 숫자로 쓸 거야!! int
T = int(input())

#range 연속된 정수 목록 만들어줌
for tc in range(1, T+1):
  N = int(input())
  nums = list(map(int, input().split()))
  #input으로 받아주면 덩어리 전체가 문자열 하나로 받아짐 -> 공백을 기준으로 자름- split은 리스트임


  # 분리한다. input은 문자열이니까 숫자로 바꿔주자. 숫자로 바뀐 뭉탱이를 다시 리스트로 묶어주자. 총 3단계

# 1. 공백을 기준으로 자른다 (split)
# 2. 각각을 숫자로 형변환한다(int함수 이용, 각각을 변환해야돼서 뭔가 더 필요함) (map,int)
# 3. 리스트로 감싸준다 (list)

# 초기값을 두 개 설정
  max_num = -float("INF") # =nums[0]
  min_num = float("INF") # =nums[0]
  # 아주아주 작은 값 설정해야 최대값 구할 수 있음 / 아주아주 큰 값 설정해야 최소값 구할 수 있음 / float 실수를 만드는 내장 함수. 

# 반복문을 이용해서 nums 순회하며
  for num in nums:
  # max_num과 방금 뽑은 숫자를 비교 => 갱신
    if max_num < num:
      max_num = num
  # min_num과 방금 뽑은 숫자를 비교 => 갱신
    if min_num > num:
      min_num = num

  ans = max_num - min_num

  print(f"#{tc} {ans}")
  print(f"kdjfkdfjks")
  # 변수 출력할 때는 중괄호 안에 변수 이름 적어줘
  pritn(f"#{tc} {ans}")