const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const allBolsistas = alunos.map(aluno => aluno.bolsista).reduce((acc,atual) => {
    return (acc && atual) 
})

console.log(allBolsistas)

const notAllBolsistas = alunos.map(aluno => aluno.bolsista).reduce((acc,atual) => {
    return (acc || atual) 
})

console.log(notAllBolsistas)