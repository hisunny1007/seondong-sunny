import sys
input = sys.stdin.readline
# readline이용해서 입력받으면 입력값 맨 뒤, 맨 오른쪽에 개행문자 나옴(한줄의 공백이 나옴)
# word = input().strip() 양 옆에서 공백 지워주는 놈 오른쪽 공백 지울거면 r.strip

#팰린드롬
#ab랑 ba 다른 경우에는 조합이 아니라 순열로 풀어줘야함 (뽑은 애들의 순서가 중요할 때는 순열) permutations

from itertools import permutations


T = int(input()) #테스트 케이스 객수
for _ in range(T): #T개만큼 반복
  k = int(input())

  # 리스트컴프리헨션
  words = [input().rstrip() for _ in range(k)]

  # words = []
  # for _ in range(k):
  #   word = input().rstrip()
  #   words.append(words)

  # 순열 모듈을 활용해서 단어 두 개 뽑은 후
  for w1, w2 in permutations(words, 2):  
    # 둘을 이어 붙이고 
    word = w1 + w2
    # 회문 여부 검사
    # 회문이라면?
    if word == word[::-1]:   #처음부터 끝까지 뒤집어줘
      #  출력 후 break
      print(word)
      break

  # 찾지 못했다면?
  else:
    # 0 출력
    print(0)


#비정상 -> else X
#정상 -> else O
#예외처리에서 유용하게 사용되는 문법 for else / 