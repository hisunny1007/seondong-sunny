import sys
input = sys.stdin.readline

N, K = map(int, input().split())
nums = list(map(int, input().split()))

# 첫 번째 구간의 합은 직접 구한다
max_sum = tmp = sum(nums[:K])
# N-K번 반복하며
for idx in range(N - K):
    # 왼쪽을 빼고 오른쪽은 더하기
    tmp = tmp - nums[idx] + nums[idx + K]  # 새로운 길이가 K인 구간의 합 구함
    # tmp += nums[idx+K]-nums[idx]
    # 갱신하기
    max_sum = max(max_sum, tmp)  # max_sum이랑 tmp 비교해서 더 큰 값을 알려줘

print(max_sum)


# tmp = result_sum = sum(nums[:2])

# for idx in range(1):
#     tmp += nums[idx] - nums[idx+1]  # 새로운 구간합은 양 옆에서 빼고 더해주면 된다(슬라이딩 윈도우)
#     result_num = max(max_num, tmp)     # 갱신

# print(result_sum)
