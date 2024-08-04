    const {adicionarLivros} = require('./Adicionar.js')
    const {atualizarLivros} = require('./Atualizar.js')
    const {listarLivros} = require('./Listar.js')
    const {deletarLivros} = require('./deletar.js')

    function exibirMenu() {
        console.log("=======BIBLIOTECA=======" + 
            "\n (1) ADICIONAR " + 
            "\n (2) ATUALIZAR  " +
            "\n (3) LISTAR " +
            "\n (4) DELETAR " + 
            "\n (5) SAIR "
        )
         let opcao = prompt('Digite a opção desejada: ')

            switch (opcao) {
                case "1":
                    adicionarLivros(exibirMenu);
                    break;
                    case "2":
                    atualizarLivros(exibirMenu);
                    break;
                    case "3":
                    listarLivros();
                    exibirMenu()
                    break;
                    case "4":
                    deletarLivros(exibirMenu);
                    break;
                    case "5":
                    console.log("===Sessão encerrada===")
                    return
                    break;
                default:
                    throw new error ("Opção inválida, por favor digite novamente")
                    exibirMenu()
                    break;
            }
    }
        module.exports = {exibirMenu}
    
