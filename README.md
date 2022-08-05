# CriptoBoard

Sistema para acompanhamento de preços das Criptos em USD usando API da cryptocompare. A exchange selecionada para acompanhamento foi a Coinbase




1. [Pré requisitos de instalação](#pre-requisitos-de-instalacao)

   Antes de instalar tenha certeza que os pre-requisitos foram atendidos.

2. [Clone o projeto](#clone-o-projeto)

   Clonar o projeto e instalar a partir do Github

3. [Rode a aplicação](#rode-a-aplicacao)

   By this point we’ll have all the project pieces in place.

4. [EndPoints](#endpoints)

   Rotas da api

5. [Arquitetura](#arquitetura)

   Estrutura do sistema

## Pré requisitos de instalação

Sistema criado para rodar essencialmente em maquinas `(Linux/MacOS)`.

Para iniciar o sistema os seguintes requisitos são obrigatórios.

* [Git](https://git-scm.com/downloads)
* [Docker](https://docs.docker.com/engine/installation/)
* [Docker Compose](https://docs.docker.com/compose/install/)

Verifique se o `docker-compose` já esta instalado usando o seguinte comando:

```sh
which docker-compose
```

### Imagens usadas

* [Node 16](https://hub.docker.com/_/node)
* [Nginx](https://hub.docker.com/_/nginx)


| Aplicação | Porta |
|-----------|-------|
| Proxy     | 80    |
| App       | 8000  |

___

## Clone o projeto

Para instalar o acesse o link [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git), após isso baixa e instale a aplicação seguindo as instruções:

```sh
git clone git@github.com:raldney/crypto-dash.git
```

Acesse o diretório:

```sh
cd crypto-dash
```
___

## Rode a aplicação

1. Iniciar a aplicação :

    ```sh
    docker-compose up -d --build
    ```

   **Por favor, aguarde isso pode levar alguns minutos ...**

    ```sh
    docker-compose logs -f # Acompanhe os logs
    ```
   1. Possíveis problemas:
      
      Conexão com API CryptoCompare
      1. Verifique se não existe nenhuma outra conexão com a API KEY utilizada
      2. Use alguma VPN para alterar o IP, muitas vezes eles podem ter inserido o IP na BlackList (Meu Caso T.T)

2. Abra seu browser e acesse:

   * [http://localhost](http://localhost)
   * ou
   * [http://localhost:8000](http://localhost:8000)
   
   2.1. Registre-se fornecendo qualquer informação, a única realmente necessária é a API_KEY

3. Selecione as moedas desejadas. PS: algumas delas não estão disponíveis para consulta. 

4. Ao terminar, pare e limpe os serviços

    ```sh
    sudo docker-compose down -v
    ```
___

## Possíveis melhorias

### API 
   1. Para uma otimização e confiabilidade das informações pode ser possível realizar a criação de uma API 
   para salvar as informações do usuário, por exemplo: API_KEY e a Watchlist dele.
Favorecendo assim a facilidade de uso e consulta das informações da plataforma.

   2. Podendo realizar o encapsulamento da conexão com o WebSocket da CryptoCompare, pois da forma atual,
a API_KEY esta exposta podendo ser "pega" por pessoas maliciosas.

### Gráficos
   1. Para uma melhor visualização da ferramenta seria interessante inserir graficos para realizar um melhor acompanhamento.

### Saldo 
   1. Outro ponto interessante seria cadastrar quanto de cada moeda está sob custódia e assim realizar o cálculo do balanço em tempo real.

### Noticias
   1. Inserir uma barra lateral mostrando as principais notícias do mundo cripto, seria uma boa ideia para poder tomar decisões mais rapidas.
   
