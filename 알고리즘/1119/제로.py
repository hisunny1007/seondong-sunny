# 백준 10773번 제로

K = int(input())

# 최근에 쓴 수를 지울 거니까 스택 자료 구조 사용하자
stack = []


for _ in range(K):
    num = int(input())

    # if num == 0: #잘못된 숫자라면 빼서 버려
    if not num:
        stack.pop()
    else:
        stack.append(num)

print(sum(stack))

# 데이터의 추출은 pop으로만, 데이터의 삽입은 append로만
