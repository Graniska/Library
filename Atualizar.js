    const {listarLivros} = require('./Listar.js')

    function atualizarLivros(exibirMenu) {
        listarLivros()
        let numero = prompt("Digite o numero do Livro que deseja atualizar: ")
            let index = parseInt(numero) -1
                if (index < 0 || index >= global.livros.length) {
                    console.log("Livro não encontrado, por favor digite novamente: ")
                    atualizarLivros()
                } else {
                    let nome = prompt("Digite o novo nome do Livro: ")
                    let autor = prompt("Digite o novo nome do autor: ")
                    let pag = prompt ("Digite o novo numero de paginas: ")
                    let genero = prompt("Digite o novo genero: ")
                        livros[index] = {nome, autor, pag, genero}
                        console.log("Sessão atualizada com sucesso")
                } 
                    exibirMenu()
    }
        module.exports = {atualizarLivros}