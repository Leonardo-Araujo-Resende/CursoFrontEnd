FraseVaiDancar = input()
FraseDancante = ""

boolControler = True
for x in range(len(FraseVaiDancar)):
    if(FraseVaiDancar[x].isspace()):
        FraseDancante += FraseVaiDancar[x]
        continue

    if(boolControler):
        FraseDancante += FraseVaiDancar[x].upper()
        boolControler = False
    else:
        FraseDancante += FraseVaiDancar[x].lower()
        boolControler = True

print(FraseDancante)