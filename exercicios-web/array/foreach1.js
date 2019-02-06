const aprovados = ['Agatha', 'Aldo', 'Daniel', 'Raquel']

/*aprovados.forEach(function(nome, indice) {
    console.log(`${indice + 1}) ${nome}`)
})*/

aprovados.forEach((nome, indice) => { //params forEach -> (value,index,array)
    console.log(`${indice + 1}) ${nome}`)
})

aprovados.forEach(nome => console.log(nome)) //função de callback, chamada PARA CADA elemento, 
                                            //recebe o nome por parâmetro 

const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)