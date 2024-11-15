# 이진 탐색

# #연산할때마다 절반씩 줄어드는게 log N 시간복잡도 (훨씬 빠름 N 보다도)
# # log N < N < N*logN < N제곱 < 2의 N승 < ...
# 한번 탐색할 때마다 필요한 연산의 횟수가 절반으로 줄어드는 시간 복잡도
# 이진 탐색(이분 탐색) 반절로 나눠서 탐색함 . 업다운 게임.
# 탐색을 할 때마다 범위가 절반씩 줄어든다. 엄청 빠른 거임

# 정렬된 리스트 또는 특정한 범위 가운데에서만 탐색할 떄 사용 가능
# 무작위로 배열되어있으면 안됨 [3 1 8 7 10] 안됨 / 1 3 7 8 10 됨

# 범위가 전체일 때, 양끝을 포인터로 잡고 l포인터와 r포인터를 이용해서 c포인터(가운데)를 찝고 내 타겟과 큰지. 작은지. 일치하는지
# 일치하면 종료 / 크다면 c를 새로운 r로 갱신해주고 똑같이 절반의 범위에 들어가서 똒같은 로직을 한번 더 해주면 된다
# 인자만 바뀌면서 재탐색이 이뤄짐 (재귀함수로 사용!)
# 탐색횟수는 depth
# 카운팅 변수를 return

T = int(input())


def binary_search(l, r, target, cnt):
    # 가운데를 찝는다
    c = int((l + r) / 2)

    # c가 타겟과 일치?
    if c == target:
        # return 탐색횟수
        return cnt

    # c가 타겟보다 크다면?
    elif c > target:
        # 왼쪽 절반으로 재귀(r을 갱신) # 오른쪽 범위는 정답이 될 확률 이제 x
        return binary_search(l, c, target, cnt + 1)

    # c가 타겟보다 작다면?
    elif c < target:
        # 오른쪽 절반으로 재귀(l을 갱신)
        return binary_search(c, r, target, cnt + 1)


def binary_search_2(l, r, target, cnt):
    while True:
        c = int((l + r) / 2)

        if c == target:
            return cnt

        elif c > target:
            r = c

        elif c < target:
            l = c

        cnt += 1


for tc in range(1, T + 1):
    p, a, b = map(int, input().split())

    A = binary_search(1, p, a, 1)
    B = binary_search(
        1, p, b, 1
    )  # 1페이지부터 p페이지까지야, b를 찾을거야, counting은 1

    # if A < B:
    #   print("A")
    # elif B < A:
    #   print("B")
    # else:
    #   print(0)

print("A" if A < B else "B" if B < A else 0)
# A를 출력해 A가B보다 작다면. 그게 아니고 B가 더 작다면 B를 출력해. 그것도아니면 0을 출력해
