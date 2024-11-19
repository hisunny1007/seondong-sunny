# 백준 2164번

# 데이터의 추출은 위로만 발생하고
# 데이터의 삽입은 아래로만 발생함

# 1 2 3 ... N
# 데이터는 왼쪽으로 빠져나가고 오른쪽으로 들어온다

# 큐로 해야겠따. 어? 데크 이용하자

from collections import deque

N = int(input())

cards = deque(range(1, N+1))
print(cards)
# range 연속된 정수 목록은 range사용해. 이것도 이터러블 덩어리야

while len(cards) > 1:
  cards.popleft() #이건 버려
  # card = cards.popleft()
  # cards.append(card)
  cards.popleft(cards.popleft()) # 다시 오른쪽 끝으로 집어넣어

print(cards.popleft()) # 한 장 남아있는 걸 뽑아서 출력해줘
