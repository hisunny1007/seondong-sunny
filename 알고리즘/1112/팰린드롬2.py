import sys
input = sys.stdin.readline

from itertools import permutations

T = int(input()) 
for _ in range(T): 
  k = int(input())

  words = [input().rstrip() for _ in range(k)]

  # 2중 for 반복문을 이용해서 단어 두 개를 뽑은 후
  for i in range(k):
    for j in range(k):  
    # 같은 걸 뽑았다면 넘어간다
      if i == j:
        continue
    #둘을 이어 붙이고
      word = words[i] + words[j]
      # 회문 여부 검사
      # 회문이라면?
      if word == word[::-1]: 
        #  출력 후 break
        print(word)
        exit(0) #exit 하는 순간 파일 실행 자체 끝남

  # 찾지 못했다면?
    # 0 출력
  print(0)


#비정상 -> else X
#정상 -> else O
#예외처리에서 유용하게 사용되는 문법 for else / 