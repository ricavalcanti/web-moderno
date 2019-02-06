const sequencia = {
    _valor: 1, // convenção p/ variável privada 
    get valor() { return this._valor++ }, //js não suporta sobrecarga de métodos.  
    set valor(valor) {                   //
        if(valor > this._valor) {
            this._valor = valor
        }
    }
}

console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 1000
console.log(sequencia.valor, sequencia.valor)
sequencia.valor = 900
console.log(sequencia.valor, sequencia.valor)