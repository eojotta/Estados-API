const { listaDeEstados } = require("./arquivo");

function getListaDeEstados(){

    let siglasUf = []
    listaDeEstados.estados.forEach(function(sigla){

        siglasUf.push(sigla.sigla)

    })
    return { 'uf': siglasUf, 'quantidade': siglasUf.length }


}

function getDadosEstados(sigla){
    let dadosUf = false
    listaDeEstados.estados.forEach(function(dados){

        if(String(dados.sigla).toLowerCase() == String(sigla).toLowerCase()){
            dadosUf = {'uf': dados.sigla, 'descricao': dados.nome, 'capital': dados.capital, 'regiao': dados.regiao}

        }
    })
    return dadosUf
}

function getCapitalEstado(sigla){
    let capitalUf = false

    listaDeEstados.estados.forEach(function(capital){
        if (String(capital.sigla).toLowerCase() == String(sigla).toLowerCase()){
            capitalUf = { 'uf': capital.sigla, 'descricao': capital.nome, 'capital': capital.capital }

        }
    })
    return capitalUf
}

function getEstadosRegiao(regiao){
    let regiaoUf = []
    let estadoUf = {}

    listaDeEstados.estados.forEach(function(estado){

        if(String(estado.regiao).toLowerCase() == String(regiao).toLowerCase()){
                regiaoUf.push({'uf': estado.sigla, 'descricao': estado.nome })
        }

    })
    estadoUf = {'regiao': regiao, 'estados': regiaoUf }

    return estadoUf
}

function getCapitalPais(){
        let capitalPais = []
        let listaCapitais = {}

        listaDeEstados.estados.forEach(function(capital){

         if(String(capital.capital_pais).toLowerCase() != String(null).toLowerCase()){
              capitalPais.push({capital_atual : capital.capital_pais.capital,
        'uf' : capital.sigla,
        'descricao': capital.nome,
        'capital': capital.capital,
        'regiao': capital.regiao,
        'capital_pais_ano_inicio' : capital.capital_pais.ano_inicio,
        'capital_pais_ano_fim': capital.capital_pais.ano_fim

                })
               
            }

        })
        return listacAPITAIS = {'capitais': capitalPais}
}
    function getCidades(sigla){
        let cidadesUF = false

        

        listaDeEstados.estados.forEach(function(linha){


            if(sigla === linha.sigla){

                let cidadesNome = []


                linha.cidades.forEach(function(cidade){

                        cidadesNome.push(cidade.nome)
                })

                cidadesUF = {'uf' : linha.sigla,
                      'descricao' : linha.nome,
             'quantidade_cidades' : cidadesNome.length,
                        'cidades' : cidadesNome
                }
            }


        })
        
        return cidadesUF
    }



console.log(getListaDeEstados(''))
console.log('')
console.log('***********************')
console.log(getDadosEstados('SP'))
console.log('')
console.log('***********************')
console.log(getCapitalEstado('SP'))
console.log('')
console.log('***********************')
console.log(getEstadosRegiao('Sul'))
console.log('')
console.log('***********************')
console.log(getCapitalPais(''))
console.log('')
console.log('**********************')
console.log(getCidades('AC'))
console.log('')
console.log('**********************')

module.exports = {
    getListaDeEstados,
    getDadosEstados,
    getCapitalEstado,
    getEstadosRegiao,
    getCapitalPais,
}