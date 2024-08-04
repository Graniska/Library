
    function deletarLivros(exibirMenu) {
        if (livros.length == 0) {
            console.log("Não há livros a serem deletados.")
            exibirMenu()
        } else {
            console.log("=======Lista de livros=======")
            livros.forEach((objeto, indice) => {
                console.log(`${indice +1}.${objeto.nome}`)
            });
            let cancelar = prompt("Digite o numero do livro que deseja cancelar: ")
            let indice = parseInt(cancelar) -1
                if (indice >= 0 && indice < livros.length) {
                    livros.splice(indice, 1)
                    console.log("=> LIVRO DELETADO COM SUCESSO")
                    
                } else {
                    console.log("Número inválido, por favor tente novamente: ")
                    deletarLivros(exibirMenu)
                }
                    exibirMenu()
        }
    
    }
        module.exports = {deletarLivros}

        