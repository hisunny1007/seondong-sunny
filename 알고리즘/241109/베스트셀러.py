# sales_info = {} 딕셔너리 만듬
# dict()이렇게도 ㅇㅋ
# 빈 집합 만들때는 set()
# 에러위해 책제목있을경우, 없을경우 나눠
# get (key) 없는 키값으로 접근하면 none 나와서 키에러방지하기 좋음

N = int(input())

# 구조화
# 빈 딕셔너리 제작
sales_info = {}

# 반복문을 돌며
for _ in range(N):
    # 책 제목을 입력받고
    book_name = input()

    # 1. 조건문을 통한 분기
    # 만약 딕셔너리에 해당 제목이 없다면? => 생성
    if book_name not in sales_info:
        sales_info[book_name] = 1  # {'top' : 1}
    # 있다면? => 1 더해주기
    else:
        sales_info[book_name] += 1
        # sales_info[book_name] = sales_info[book_name] + 1

# 2. get 메서드 활용하기
    sales_info[book_name] = sales_info.get(book_name, 0) + 1

# 3. defaultdict 활용하기
from collections import defaultdict
sales_info = defaultdict(int)

for _ in range(N):
    book_name = input()
    sales_info[book_name] += 1

#디폴드값이 정해져있는 딕셔너리. value default 
#벨류의 디폴트값이 정해져있음 . => 뭘로 정해짐? 너가 설정하면 됨
# 키에러 발생하지 않음
# 없는 키값으로 접근햇을때 top : 0
# top : [] list
# string 하면 ''

# 4. Counter 활용하기
from collections import Counter
sales_info = [input() for _ in range(N)]
sales_info = Counter(sales_info)
print(sales_info)

# sales_info = []
# for _ in range(N):
#     book_name = input()
#     sales_info.append(book_name)


# 덩어리로 받아서 그냥 집계해버림. 목적 자체가 집계임
# 일단 책제모 ㄱ리스트로 만들어서 어펜드해





# 연산
max_sales_cnt = 0
max_sales_book = ''

#반복문 사용해서 갱신할거임
#딕셔너리를 반복하면 해당 딕셔너리의 key값만 뽑아져나옴

for name in sales_info:
    if sales_info[name] >= max_sales_cnt and max_sales_book > name:
        max_sales_book = name

for name, cnt in sales_info.items():
    if cnt >= max_sales_cnt and max_sales_book > name:
        max_sales_book = name
#키밸류값 같이 뽑아져나옴 키값과 밸류값 같이 하는거

#밸류값도 같이 이용해서 정렬하고 시프면 items() 메서드 사용해야함
#없으면 키값만임
#lambda는 임시함수
#- 가장 작은 숫자 = 가장 큰 숫자로 정렬해줘

# 딕셔너리 정렬
sorted_sales_info = sorted(sales_info.items(), key=lambda x: (-x[1], x[0]))
print(sorted_sales_info[0][0])



# 조건 1: 가장 많이 팔렸을 것(value값이 가장 클 것)
# 조건 2: 제목이 사전순으로 가장 앞설 것(key값이 가장 작을 것)
