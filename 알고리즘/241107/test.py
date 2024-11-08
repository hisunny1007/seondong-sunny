word = "python"
word2 = "j" + word[0::]
print(word2)

T = int(input())

for _ in range(T):
    idx, word = input().split()
    idx = int(idx)

    # idx = 4
    word = "MISSPELL"

    print(word[2:4])
    print(word[idx - 1])

    print(word)
