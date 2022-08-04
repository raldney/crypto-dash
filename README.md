# Gerador de boletos

Sistema de geração de boletos para Tim, através do upload de CSV. O sistema foi construido usando Docker, com uma API para
o backend feita em JS e frontend feito em VueJs 2. Os dados são persistidos em um banco MySql. Para o gerenciamento de tasks
foi utilizando o BullJS com cache em Redis e o Bullboard para acompanhamento dos jobs.


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

Sistema criado para rodar essencialmente em maquinas `(Linux/MacOS)`. Porém pode ser suportado para windows.

Para iniciar o sistema os seguintes requisitos são obrigatórios.

* [Git](https://git-scm.com/downloads)
* [Docker](https://docs.docker.com/engine/installation/)
* [Docker Compose](https://docs.docker.com/compose/install/)

Verifique se o `docker-compose` já esta instalado usando o seguinte comando:
ssh –i root.pem ec2-user@3.235.169.179
```sh
which docker-compose
```

### Imagens usadas

* [Node 16](https://hub.docker.com/_/node)
* [MySQL](https://hub.docker.com/_/mysql/)
* [Redis](https://hub.docker.com/_/redis/)
* [Bullboard](https://hub.docker.com/r/deadly0/bull-board)


| Aplicação | Porta |
|-----------|-------|
| Api       | 3000  |
| Mysql     | 3306  |
| App       | 8080  |
| Bullboard | 4000  |

___

## Clone o projeto

Para instalar o acesse o link [Git](http://git-scm.com/book/en/v2/Getting-Started-Installing-Git), após isso baixa e instale a aplicação seguindo as instruções:

```sh
git clone https://github.com/raldney/w_cobranca.git
```

Acesse o diretório:

```sh
cd w_cobranca
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
      
      Api não se conectar ao Banco de dados. 
      1. Verifique se o banco terminou de ser criado e esta pronto para receber conexão
      2. Reinicie a maquina da Api
      ```sh
        docker restart api
      ```

2. Abra seu browser e acesse:

    * [http://localhost:8080](http://localhost:8080/login) App ( username: admin, password: wt2022@#)


3. Pare e limpe os serviços

    ```sh
    sudo docker-compose down -v
    ```
___


## EndPoints
	PATH /api/v1

### EndPoint - GET Files
	GET /files

#### Descrição
	Retorna todos os arquivos


#### Exemplo
	GET /api/v1/files
**Result**
``` json
[{"id":1,
"name":"teste",
"link":"1g51p7sf0q1o.csv",
"isProcessing":true,
"createdAt":"2022-06-08T13:49:38.000Z",
"updatedAt":"2022-06-08T13:49:38.000Z",
"deletedAt":null},
{"id":2,
"name":"teste",
"link":"22sdp7sf0q1o.csv",
"isProcessing":false,
"createdAt":"2022-06-08T13:52:38.000Z",
"updatedAt":"2022-06-08T13:53:38.000Z",
"deletedAt":null}]
```
___


### EndPoint - GET Files
	GET /files/download/{id}

#### Descrição
	Realiza o download do arquivo
___ 

### EndPoint - POST Files
	POST /files

#### Descrição
	Realiza a inserção de um novo arquivo

#### Parameters
	Todos os parametros precisam ser enviados no formato 'multipart/form-data'
- **name** (required) — Name of user.
- **file** (required | unique) — E-mail.

#### Example
	POST /api/v1/users/trashed?limit=10&page=1
**Result**
``` json
{
   "status":201,
   "message":"File Created",
   "data":
      {
         "id":1,
         "name":"teste",
         "isProcessing":true,
         "link":"1g51p7sf0q1o.csv",
         "updatedAt":"2022-06-08T13:49:38.174Z",
         "createdAt":"2022-06-08T13:49:38.174Z"
      }
}
```
___


## Errors
Todos os erros conhecidos fazem com que a aplicação retorne o 'status' e a 'message' do erro:

- **400 Bad Request** — File name is required
- **401 Unauthorized** — No token provided.
- **500 Internal server error** — Failed to authenticate token.
- **500 Internal server error** — No header was sent.


# Arquitetura
![arquitetura](../../../Library/CloudStorage/OneDrive-Personal/arch.png)

