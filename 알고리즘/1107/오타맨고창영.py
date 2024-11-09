T = int(input())

for _ in range(T):
  idx, word = input().split()
  idx = int(idx) - 1

  # idx를 기준으로 처음~idx전까지 자르고 // idx+ 1~끝까지 잘라서 붙이기
  ans = word[:idx] + word[idx+1:]

  print(ans)



  word = list(word)
  word.pop(idx)
  ans = ''.join(word)
  # 문자열은 수정 불가하ㅣ까 list로 바꿧다가 다시 문자열로 바꿔
  print(ans)



  # 입력받은 다음 1 뺴면 흔히 아는 인덱스로 사용할 수 있음. 예제입력이랑 출력 확인해서 인덱스값 1부터 시작하는 거 확인 해
