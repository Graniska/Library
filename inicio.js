        const prompt = require('prompt-sync')()
        const {exibirMenu} = require('./menu')

        let livros = []

        global.prompt = prompt
        global.livros = livros

        exibirMenu()