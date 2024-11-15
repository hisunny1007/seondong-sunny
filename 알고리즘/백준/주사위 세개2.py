# 2480번 주사위 세개
# sort 함수 분류
# a, b, c
# 세개 같은 경우
# 두개 같은 경우
# 다 다른 경우

# sort쓰면 작 -> 큰으로 정렬이되잖아 

# 1 1 1 => 세개 같은 경우

# 1 1 2 => 두개 같은 경우 (가운데)

# 1 2 2 => 두개 같은 경우 (가운데)

# 1 2 1 => 이건 sort 쓰면 없음

# 1 2 3 => sort로 정렬되어 있으니까 바로 마지막꺼 뽑으면 돼


a, b, c = map(int, input().split())
lst = [a, b, c]
lst.sort()

if lst[0]== lst[1] == lst[2]:
  print(10000+lst[0]*1000)
elif lst[0] == lst[1] or lst[1] == lst[2]:
  print(1000+lst[1]*100)
else:
  # print(max(lst)*100)
  print(lst[2]*100)
