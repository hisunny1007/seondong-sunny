lst = [56, 23, 43, 87, 12, 457, 86]


firstnumber = 0

for number in lst:
    if firstnumber < number:
        firstnumber = number

print(firstnumber)
