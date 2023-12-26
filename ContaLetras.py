qntFrases = int(input())

for x in range(qntFrases):

    frase = input().lower()

    frase = frase.split(" ")
    frase = "".join(frase)

    frequencia = [[0 for i in range(2)] for j in range(len(frase))]
    for a in range(len(frase)):
        for b in range(2):
            frequencia[a][b] = 0

    for y in range(len(frase)): #cada letra
        for z in range(len(frase)): #percorre matriz procurando a letra
            if(frequencia[z][0] == frase[y] or frequencia[z][0] == 0):
                frequencia[z][0] = frase[y]
                frequencia[z][1] += 1
                break

    
    #Letra com maior numero de repeticoes
    maiorNumeroRepeticoes = 0
    for y in range(len(frase)):
        if(maiorNumeroRepeticoes < frequencia[y][1]):
            maiorNumeroRepeticoes = frequencia[y][1]

    #Letras com maior numero de repeticoes
    letrasMaisRepetem = ""
    for y in range(len(frase)):
        if(frequencia[y][1] == maiorNumeroRepeticoes):
            letrasMaisRepetem = letrasMaisRepetem + frequencia[y][0]
    
    print("".join(sorted(letrasMaisRepetem)))