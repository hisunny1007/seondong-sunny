#2675번 문자열 반복 https://www.acmicpc.net/problem/2675

T = int(input())

# 여러 테스트 케이스를 처리하려면 T만큼 반복
for _ in range(T):
# 3 ABC 숫자랑 문자열 같이 있으니까 따로 나눠야함
  R, S = input().split() #['3', 'ABC']
# split() 메서드가 문자열을 공백 기준으로 나누어 리스트를 반환
# R = '3' , S = 'ABC'
  R = int(R)

  for char in S: #문자열 S의 각 문자를 순회
    print(char * R, end="") #문자를 R번 반복하여 출력, 줄 바꿈 하지 않음
  print() # 테스트 케이스 간 줄 바꿈


# R = 3
# S = 'ABC'

# for char in S:
# char은 S의 각 문자를 순서대로 가져옴
#   print(char * R, end='')
# # AAABBBCCC

# for idx in range(R):
#   ans = S[idx]*R
#   print(ans, end="")
#  idx는 0부터 R-1까지 숫자 생성
# S[idx]는 S[0],S[1],S[2]까지만 접근 가능
# 만약 R이 S의 길이보다 크다면 인덱스 오류남

# 왜 동작하지 않나요?
# range(R)는 숫자 0부터 R-1까지를 생성하며, S 문자열의 각 문자와는 직접적으로 연결되지 않습니다.
# 인덱스(S[idx])로 접근하려면, R이 문자열 S의 길이와 같아야만 정확히 동작합니다.

# 숫자 인덱스 사용하고 싶으면 반복 횟수를 문자열 길이에 맞춰야함
# for idx in range(len(S)):
#   print(S[idx]*R, end='')

