my_dict = {'name' : 'ken', 'age' : 20, 'license' : True}

# get 메서드 (키값이용해서 안에 value값 접근함)
# 없는 키값으로 접근해도 오류 발생하지 않아. none으로 반환함

print(my_dict['name'])
# print(my_dict['adress']) # 없는key값 쓰면 에러뜸

print(my_dict.get('adress')) #에러 말고 none으로 반환함
print(my_dict.get('adress', 0)) #대체값 설정 가능


# keys, values, items 메서드
print(my_dict.keys()) #딕셔너리의 key들이야
print(my_dict.values()) #딕셔너리의 value값들이야
print(my_dict.items()) #이건 딕셔너리의 아이템들이고 key:value 묶여서 나옴

