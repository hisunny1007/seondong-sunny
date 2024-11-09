my_set = set()

# 원소 삽입
my_set.add(5)  # 리스트는 append
print(my_set)

# 원소 삭제
my_set.discard(5)
print(my_set)

my_set.remove(5)
print(my_set)

my_set.remove(3)  ## 리무브 사용하면 없는 키 삭제할 떄 키 에러 남
# 디스카드는 없는 키 삭제하려고 해도 그냥 넘어감.에러x

# 알고리즘 할 때는 에러 발생 안 시키고 통과시키는 목적이니까 discard 써라!!
