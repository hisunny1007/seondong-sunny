nums = [3, 5, 1, 4, 2]

# 첫 번째 구간의 합은 직접 구한다
tmp = max_num = sum(nums[:3])       # 첫 번째 구간합 구하기

for idx in range(2):                # 첫 번째는 이미 구했으므로
    # 맨 왼쪽은 뺴고, 오른쪽은 더한다
    tmp += nums[idx+3] - nums[idx]  # 새로운 구간합은 양 옆에서 빼고 더해주면 된다(슬라이딩 윈도우)
    # 갱신할 수 이으면 갱신한다
    max_num = max(max_num, tmp)     # 갱신

print(max_num)
