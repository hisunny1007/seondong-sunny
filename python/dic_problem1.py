# 1. 
# 상품의 이름이 "콜라", 가격이 "1800원", 재고가 "4개" 인 데이터를
# "product" 변수에 저장하시오.

product = {
  '이름' : '콜라',
  '가격' : "1800원",
  '재고' : "4개"
}
print(product)
# 1.a
# product에 어떤 데이터 종류들이 저장되어 있는지 출력하시오.
    # 예) 이름 가격 재고

for key in product:
  print(key)


for value in product.values():
  print(value)

# 1.b
# product를 활용하여 다음과 같은 형식으로 출력하시오
# 이름 : 콜라
# 가격 : 1800
# 재고 : 4

for key, value in product.items():
  print (key, value)


# 1.c
# 콜라의 판매량이 3개일 때, 이 데이터를 product에 반영하시오.

product["재고"] = '3개'
print(product)