V = int(input())
E = int(input())

adj_lst = [[] * (V+1) for _ in range(V+1)]

for _ in range(E+1):
  s, e = map(int,input().split())
  adj_lst[s].append(e)
print(adj_lst)


이건 0번 컴퓨터가 없음

0 ~ 6 => 1~ 7

앞뒤로 한개씩 추가해야댐

(0) 1 2 3 4 5 6 7 (8)

25 / 3 /26
2는 중복