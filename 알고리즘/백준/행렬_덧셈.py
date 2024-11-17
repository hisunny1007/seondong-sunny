# 2738번 행렬 덧셈

# matrix_a와 matrix_b를 더해서
# 4 4 4
# 6 6 6
# 5 6 100
# 출력하고 싶음
# 리스트로 말고 값만 출력하고 싶음

matrix_a = [[1,1,1],
            [2,2,2],
            [0,1,0]]

matrix_b = [[3,3,3],
            [4,4,4],
            [5,5,100]]

matrix = []

for i in range(3):
  for j in range(3):
    ans = matrix_a[i][j] + matrix_b[i][j]
    matrix.append(ans)

# print(matrix)
# [4, 4, 4, 6, 6, 6, 5, 6, 100]

# 444 / 666 / 56100
for idx in range(0,len(matrix),3):
  print(matrix[idx],matrix[idx+1],matrix[idx+2])

