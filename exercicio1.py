

matrix =   [[1, 2, 3],
            [4, 5, 6],
            [7, 8, 9]]



tamanhomatrix = len(matrix)

matrixAuxiliar = [[0 for i in range(tamanhomatrix)] for j in range(tamanhomatrix)]

for x in range(tamanhomatrix):
    for y in range(tamanhomatrix):
        if(matrixAuxiliar[x][y] == 1 or matrixAuxiliar[x][y] == 1):
            continue
        aux = matrix[x][y]
        matrix[x][y] = matrix[y][x]
        matrix[y][x] = aux
        matrixAuxiliar[x][y] = 1
        matrixAuxiliar[y][x] = 1


for y in range(tamanhomatrix):
    aux2 = tamanhomatrix - y -1
    for x in range(tamanhomatrix):
        if(matrixAuxiliar[x][y] == -1 or matrixAuxiliar[x][aux2] == -1):
            continue
        aux = matrix[x][y] 
        matrix[x][y] = matrix[x][aux2]
        matrix[x][aux2] = aux

        matrixAuxiliar[x][y] = -1
        matrixAuxiliar[x][aux2] = -1


print(matrix)


[[7, 4, 1], 
 [8, 5, 2], 
 [9, 6, 3]]