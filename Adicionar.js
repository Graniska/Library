
    function adicionarLivros(exibirMenu) {
        let nome = prompt("Digite o nome do Livro: ")
        let autor = prompt("Digite o autor do Livro: ")
        let pag = prompt("Digite o numero de paginas: ")
        let genero = prompt("Digite o genero do livro: ")
            global.livros.push({nome, autor, pag, genero})
            console.log("======Livro adicionado com sucesso======")
            exibirMenu()
    }
        module.exports = {adicionarLivros}
        
