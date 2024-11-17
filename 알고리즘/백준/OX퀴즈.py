# 8958번 ox퀴즈

T = int(input())
ox = input()

for _ in range(T):
  sum = 0
  count = 0
  
  for i in range(len(ox)):
  if ox[i] == 'O':
    count += 1
    sum += count
  else:
    count = 0
  print(sum)


#   1
#   12
#   123
#   1234
#   12345
#   1
#   1 + (1+1)
#   1 + (1+1) + (1+1+1)
#   1 + (1+1) + (1+1+1) + (1+1+1+1)

# a*1 + a*2 + a*3 + a*4

# sum = 0
# for(let i = 1 ; i < 5; i++){
#   sum = a * i
#   console.log(sum)
# }
