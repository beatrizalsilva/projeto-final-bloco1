import readlinesync = require("readline-sync")

import { Ficcao } from "./src/model/Ficcao"
import { NaoFiccao } from "./src/model/NaoFiccao"

export function main() {
    // teste
    const livro1: Ficcao = new Ficcao(1, "Orgulho e Preconceito", "Jane Austen", 1, 19.20, "Romance hitórico")
    livro1.visualizar()

    const livro2: NaoFiccao = new NaoFiccao(2, "Entendendo Algoritmos", "Aditya Y. Bhargava", 2, 65, "Programação")
    livro2.visualizar()

    while(true) {
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("                  Livraria das Memórias              ")
        console.log("                                                     ")
        console.log("*****************************************************")
        console.log("                                                     ")
        console.log("          1 - Listar todos os livros                 ")
        console.log("          2 - Listar livro por Id                    ")
        console.log("          3 - Cadastrar novo livro                   ")
        console.log("          4 - Atualizar informções do livro          ")
        console.log("          5 - Deletar livro do acervo                ")
        console.log("          6 - Sair                                   ")
        console.log("                                                     ")
        console.log("*****************************************************")

        console.log("Entre com a opção desejada: ")
        let opcao: number = readlinesync.questionInt("")

        if(opcao == 6) {
            console.log("\nLivraria das Memórias - Cada página, uma memória. Cada livro, uma jornada inesquecível.")
            about()
            console.log("")
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log("\nListando todos os livros...")
                keyPress()
                break
            case 2:
                console.log("\nProcurando livro por Id...")
                keyPress()
                break
            case 3:
                console.log("\nCadastrando novo livro...")
                keyPress()
                break
            case 4:
                console.log("\nAtualizando informações de um livro...")
                keyPress()
                break
            case 5:
                console.log("\nRemovendo livro do acervo...")
                keyPress()
                break
            default:
                console.log("\nOpção inválida!")
                keyPress()
                break
        }
    }
}

function keyPress(): void {
    console.log("Pressione ENTER para continuar...")
}

function about(): void {
    console.log(`Projeto desenvolvido por: Beatriz Alves \ngithub.com/beatrizalsilva`)
}

main()