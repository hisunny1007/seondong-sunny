import sys

input = sys.stdin.readline


# 해시 쓰면 빠르게 삭제 가능
# 데이터셋 제작 (해시자료구조로)
# 데이터 쌍으로 할 필요 없음(띡셔너리x)
# 그래서 집합으로
# (단순히 n 번 반복할 거야, 변수없이) for _ in

# 변수에 바로 할당할 거니까 int 할 필요도 없음
# 공백 기준으로 나누니까 split 해야함
# 리무브 없는 데이터 쓰면 키에러
# 디스카드는 오류발생 x
# 쏠트함수는 리스트 전용함수!!! 리스트에서밖에 못씀
# 리스트 아닌 다른 녀석 정렬할 때는 sorted 함수 써 (다른 자료구조 사용 가능)
# sorted(이터러블, 반복가능한, 덩어리 받음)
# 집합자료구조도 덩어리


# sort() -> 원본 리스트 변경됨 (원본 자체 변경)
# sorted() -> 원본은 그대로, 정렬된 새로운 객체 생성
# 반환값은 항상 리스트

n = int(input())


# 데이터셋 제작 (해시, 집합)
company = set()

# n번에 걸쳐서 로그가 입력
for _ in range(n):
    # 입력을 받은 후
    name, status = input().split()
    # 상태가 enter라면? => 데이터셋에 추가
    if status == "enter":
        company.add(name)
    # 상태가 leave라면? => 데이터셋에서 삭제
    elif status == "leave":
        company.discard(name)

# 데이터셋을 역순으로 정렬
sorted_company = sorted(company, reverse=True)

# 하나씩 출력
for name in sorted_company:
    print(name)
