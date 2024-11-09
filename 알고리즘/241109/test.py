from itertools import combinations

dwarfs = [int(input()) for _ in range(9)]
dwarfs.sort()

# print(list(combinations(dwarfs, 7)))

# #눈에보이고싶으면 list로 형변환해 list()

for combi in combinations(dwarfs, 7):
  if sum(combi) == 100:
    for dwarf in combi:
      print(dwarf)
      break

#sort로 이미 정렬해서 따로 정렬 필요 없음
# ab ba뽑을떄 순서 중요하면 per~
