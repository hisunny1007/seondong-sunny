a, b, c = map(int, input().split())

if a == b == c:
  print(10000+a*1000)

# 2 2 3
# 3 3 1
elif a == b and b != c:
  print(1000+a*100)

# 1 3 3
# 5 2 2
elif a != b and b == c:
  print(1000+b*100)

elif (a != b and b != c and a != c):
  print(max(a, b, c)*100)


# elif (a == b and  != c):
#   print(1000+a*100)
# elif (a > b > c):
#   print(a*100)
# elif (b < c):
#   print(a*100)