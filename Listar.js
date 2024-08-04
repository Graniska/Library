
    function listarLivros() {
        console.log("========================")
         livros.forEach((objeto, index) => {
            console.log(`
                    ${index + 1} 
                    |nome:${objeto.nome}
                    |autor: ${objeto.autor}
                    |paginas: ${objeto.pag}
                    |genero: ${objeto.genero}`)
        console.log("========================")
                
         });

    }   
        module.exports = {listarLivros}