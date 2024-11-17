N, M = map(int, input().split())

# 입력값을 행렬로 만들기

#  바깥 리스트 만들기
arr_a = []
arr_b = []

# 안에 들어갈 값을 리스트로 만들어서 바깥 리스트에 집어넣기
for _ in range(N):
    a = list(map(int, input().split()))
    arr_a.append(a)

for _ in range(M):
    b = list(map(int, input().split()))
    arr_b.append(b)

# 행렬 더하기

for i in range(N):
    for j in range(M):
        ans = arr_a[i][j] + arr_b[i][j]
        # a[0][0]+b[0][0]
        # a[0][1]+b[0][1]
        print(ans)
