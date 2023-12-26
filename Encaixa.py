while(True):
    pecas = input("Peças: ")
    pecas = pecas.split(" ")
    grande = pecas[0]
    pequena = pecas[1]

    isEncaixa = True

    if(len(pequena) < len(grande)):
        i = -1
        for x in pequena:
            if(grande[i] != pequena[i]):
                isEncaixa = False
            i -= 1
    else: 
        isEncaixa = False
        
    if(isEncaixa): 
        print("Encaixa!")
    else: 
        print("Não encaixa!")