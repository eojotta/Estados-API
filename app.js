/***********************************************************************************
*Objetivo: Arquivo responsável pela criação da API do projeto de Estados e Cidades
*Data: 01/04/2026
*Autor: João Pedro
*Versão: 1.0
************************************************************************************/

/**
 * Para configurar a API:
 *  Instalar o EXPRESS -> npm install express --save (dependencia para configurar e utilizar o protocolo HTTP para criar a API)
 *  Instalar o CORS    -> npm install cors --save (permissões que a api precisa ter para ter acesso ao front / se não o front não consegue ter permissão)
 */



//import das dependencias para criar a API
const express = require('express')
const cors    = require('cors')
const { METHODS } = require('node:http')


//criando um objeto do express para criar a API
const app = express()

//Configurações do CORS da API
const corsOptions = {
    origin: ['*'],  //Configuração de origem da Requisição (IP ou Domínio)
    methods: 'GET', //Configuração dos verbos que serão utilizados na API
    allowedHeaders: ['Content-type', 'Authorization'] // Configuração de permissões
                    //Tipo de dados   //Autorização de acesso
}  

//Aplica as configurações do CORS no app (EXPRESS)
app.use(cors(corsOptions))

//Import do arquivo de funções
const estadosCidades = require('./model/funcoes.js')

//Endpoint para listar os Estados
app.get('/v1/senai/estados',function(request, response){

   let estados = estadosCidades.getListaDeEstados()
    response.json(estados)
    response.status(200) //Requisição bem sucedida!!
})



//Endpoint para dados estados/sigla
app.get('/v1/senai/dados/estados/:uf', function(request,response){
    let sigla = request.params.uf
    let estado = estadosCidades.getDadosEstados(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message': 'Nenhum estado foi encontrado'})
        response.status(404)
    }
   
})

//Endpoint para capital estado/sigla
app.get('/v1/senai/capital/estados/:uf', function(request,response){
    let sigla = request.params.uf
    let estado = estadosCidades.getCapitalEstado(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message': 'Nenhuma capital foi encontrada'})
        response.status(404)
    }
   
})

//Endpoint para região estado/sigla
app.get('/v1/senai/regiao/estados/:uf', function(request,response){
    let sigla = request.params.uf
    let estado = estadosCidades.getEstadosRegiao(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message': 'Nenhuma regiao foi encontrada'})
        response.status(404)
    }
   
})

//Endpoint para capital estado/sigla
app.get('/v1/senai/capital/estados/:uf', function(request,response){
    let sigla = request.params.uf
    let estado = estadosCidades.getCapitalPais(sigla)
    if(estado){
        response.json(estado)
        response.status(200)
    }else{
        response.json({'message': 'Nenhuma regiao foi encontrada'})
        response.status(404)
    }
   
})


app.get('/cidades', function(request, response){
    response.json({'message': 'Testando a API de cidades'})
    response.status(200)
})

//Fazer o Start na API (aguardando as requisições)
app.listen(8080, function(){
    console.log('API aguardando novas requisições...')
})