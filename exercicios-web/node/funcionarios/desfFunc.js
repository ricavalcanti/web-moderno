const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const isMulher = funcionario => funcionario.genero === 'F' 
const isChinesa = funcionario => funcionario.pais === 'China'
const menorS = (funcionario, funcionarioAtual) => {
    return funcionario.salario < funcionarioAtual.salario ? funcionario :funcionarioAtual
}
axios.get(url).then(resp =>{
    const funcionarios =  resp.data
    const resultado = funcionarios.filter(isMulher).filter(isChinesa).reduce(menorS)
    console.log(resultado)
})





