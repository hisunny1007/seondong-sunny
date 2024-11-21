from collections import deque


# bfs 코드임
# 초기 세팅 (출발지, 기록지, 예정지)
queue = deque([1])
# 1에서 출발할꺼니까 일단 방문예정지로 1 박아놓음

visited = set([1])
# 기록지는 방문했는지 여부를 알기 위해서 만듬(검색 => 해시자료구조-집합)
# 예정지에 들어갔으니까 1 방문했다고 체크 완료


# 예정지가 빌 때까지
while queue:
    # 예정지에서 꺼내서 방문 (꺼내는 거 자체가 방문임!)
    cur = queue.popleft()
    # 큐에서 뽑아낸 곳이야.

    # 방문한 곳에서 갈 수 있는 곳 탐색 (인접리스트)
    for nxt in adj_lst[cur]:
        # 방문한 적이 없는 곳이라면? (기록지)
        if nxt not in visited:
            #  방문체크하고
            visited.add(nxt)
            #  예정지에 집어넣는다
            queue.append(nxt)


# 둘다 사용할 수 있는 공통 로직

# d로 바꿀꺼면 방문예정지를 stack으로 쓰고 pop()
