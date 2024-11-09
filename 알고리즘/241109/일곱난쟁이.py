# dwarfs = []

# for _ in range(9):
#   dwarf = int(input())
#   dwarfs.append(dwarf)
# ##주어진 입력값을 리스트로 구조화
# 인덱스 활용함 i랑 j 다 인덱스임
# break는 가장 가까운 반복문 하나를 중지시킴
# 그럼 j만 브레이크하고 i 는 계속 돌아감
# 그럼안되지
# 
# flag 이용해서 이중for반복문 종료시키자
# 깃발을내린상태에서,, 정답 찾은순간 flag 올리고 안쪽 반복문 파괴시켜
# 이미 깃발올린상태니까 원래 반복문도 즉시 종료
# 원래는 for i in range(9) / for j in range(9)


dwarfs = [int(input()) for _ in range(9)]
dwarfs.sort()

# 2중 for문을 활용해보자
flag = False
for i in range(8):
  for j in range(i+1, 9):
    # 만약 i번째 난쟁이 키와 j번째 난쟁이 키를 전체 합에서 빼서 100이 된다면?
    if sum(dwarfs) - dwarfs[i] - dwarfs[j] == 100:
    # i, j를 보관
      spy = [i, j]
    # 2중 for문을 종료
      flag = True
      break ## j 부분 파괴
  if flag: # if flag == true
    break ## i 부분 파괴

# 하나씩 출력
for idx in range(9):
# (i, j번째는 출력하지 않음)
  # if idx == i or idx == j:
  if idx in spy:
    continue

  print(dwarfs[idx])


  # 이중for문 반복해서 두개 데이터 찾는거는 시간복잡도가 N제곱이다
  # 뽑기만 하는건 조합 )순서x
  # 순서 중요한건 순열
  

  # 인덱스 잘 조율하면 효율화 시킬 수 있음
  # => 인덱스 잘 조율해도 여전히 n제곱 알고리즘이라
  # 투포인터로 효율화 시켜라

  #n개의 데이터에서 2개 뽑는 완전탐색알고리즘은 이중포문 이용해.
  #이중포문은 break 하나만으로 종료시키기 어려워서 변수 flag를 이용해서 둘다 잘 종료해








# i 를 pop 하는 순간 j 인덱스값 변ㅇ함
# 반복문에서 pop 할 때 조심해야함
# pop 할 때마다 인덱스 바뀜