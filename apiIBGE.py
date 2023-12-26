import requests
import pprint

link = "https://servicodados.ibge.gov.br/api/v3/agregados/319/periodos/1996/variaveis/246?localidades=N2[3]"

resposta = requests.get(link).json()
pprint.pprint(resposta[0]['resultados'][0]['series'])