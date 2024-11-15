# f(n+2) = f(n+1) + f(n)

# fibo(n) = fibo(n-1) + fibo(n-2) (단 n >= 2)
# # (단 n >= 2 / 종료 조건으로 활용)

n = int(input())


def fibo(N):
    # 리턴 조건
    if N <= 1:
        return N

    # 탐색 로직
    return fibo(N - 1) + fibo(N - 2)


fibo(n)

# 재귀함수를 이용한 피보는 중복이 엄청 많이 나옴 => 효율적 방법 필요

# 중간 연산 결과를 어딘가에 기록(캐싱)해두고 기록을 함으로써 나중에 연산결과 필요할 때 기록해놓은거 가져와서 사용
# => 메모이제이션

n = int(input())
memo = [0, 1] 

# 반복문을 돌면서 메모라는 리스트에 연산의 결과를 append 해준다
# 더해서 기록하고 

for _ in range(n-1):
    memo.append(memo[-1] + memo[-2])


print(memo[n])

