while(True):
    palavra = input("Digite a palavra: ")

    isPalindromo = True

    i = 0
    j = -1
    for x in range(len(palavra)):
        if(palavra[i] != palavra[j]):
            isPalindromo = False
            break
        i+=1
        j-=1

    if(isPalindromo):
        print("É palindromo")
    else:
        print("Não é palindromo")
