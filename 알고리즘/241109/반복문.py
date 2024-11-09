lst = [10, 20, 30, 40, 50]


# for 반복문
# 1. 횟수가 정해져 있는 반복

# while 반복문
# 횟수 정해져 있지 않은 반복

# 최대 해당 덩어리의 길이까지만 반복

# for 변수 in 덩어리(iterable, 반복가능)

for num in lst:
  print(num)


# 인덱스로 접근하면 원본데이터 접근해서 원본데이터 간단한 수정 가능함
for indx in range(len(lst))
  # print(num[idx])
  lst[idx] += 5

print(lst)

# while 반복문
# 횟수가 정해져 있지 않은 반복

idx = 0

while idx < 5:
  print(lst[idx])
  idx += 1

# 증감식 : IDX +=1 FALSE만들어서조건ㄲㅡㅌ내

for num in lst:
  if num == 45:
    print("찾았다!")
    break
#break 가장 가까운 반복문 하나 파괴시킴