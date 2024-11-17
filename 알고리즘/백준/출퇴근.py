n = int(input())

name, companylog = input().split()

for i in range(n):
  if companylog == "enter":
    print(name[i])
