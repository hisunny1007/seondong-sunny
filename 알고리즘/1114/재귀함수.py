# 1. 함수
  # 로직을 담아서 반복 사용
  # def을 이용하여 정의

# 2. LEGB 규칙
  # 1) local 영역에서 global 영역 변수를 재할당할 수 없다
      # 재할당하고 싶을 때에는 global 처리
  # 2) local 영역에서 global 영역 변수를 참조할 수는 있다
      # 리스트 등 메서드 사용은 재할당이 아닌 참조
  # 3) 참조할 때에는 LEGB 순서(우선순위)로 참조한다 (상대적 개념임)

# 3. 재귀함수
  # 자기 자신으로써 정의되는 함수

def my_func(depth):
  # 재귀의 종료 조건
  
  # 탐색 로직

  my_func(depth + 1)


my_func(0) 
# depth가 점점 깊어짐, 재귀가 너무 깊어지면 에러 발생함. 재귀 사용할 때는 함수 윗부분에 종료조건을 설정함








# 함수 내부에서 자기 자신 함수를 또 호출

# Local enclosed(함수 내부에 다른 함수가 정의되어 있을 때) global built-in(내장)


# # 함수 내부 - local(지역)
# # 함수 바깥- global(전역)
# local 안에 있는 걸 global에서 재할당할 수 없음



# 이건 실행 불가
a = 5

def my_func():
  a += 5

my_func() # my func 호출해야함
print(a)

#  참조는 가능함
a = 5

def my_func():
  b = 10
  b += a
  return b

print(my_func())

# 재할당해서 전역에서 사용하겠다

a = 5
def my_func():
  global a
  
  a += 5
my_func()
print(a)

# a가 리스트라면? 숫자든 리스트든 다 똑같음

a = [1, 2, 3, 4, 5]

def my_func():
  # a += [6] 더해서 재할당해라=> 1번 오류가 남
  a.append(6)

my_func()
print(a)

# append는 재할당이 아니고 단순 참조임. pop도 함수 내부에서 글로벌 처리 안 하고 사용 가능함. 

# 재귀함수
# while반복문처럼 종료 조건 잘 잡아야함
def my_func():

  my_func()

my_func()