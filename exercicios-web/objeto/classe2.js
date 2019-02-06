class Avo {
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { //determinada classe tem outra classe como protótipo: extends
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome) //chama o construtor da super classe, nesse caso a classe avo
        this.profissao = profissao
    }
}

class Filho extends Pai {
    constructor() {
        super('Silva')
    }
}

const vovo = new Avo("Dantas")
console.log(vovo)
const filho = new Filho
console.log(filho)
