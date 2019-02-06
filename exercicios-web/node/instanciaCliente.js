const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')() //retorna um objeto, invocando a função retornada (factory)
const contadorD = require('./instanciaNova')()

//como foi instanciado só uma vez, modifica diretamente no espaço de memória
contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

//nesse caso cria novas instâncias, é necessário usar uma função factory para isso.
contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)
