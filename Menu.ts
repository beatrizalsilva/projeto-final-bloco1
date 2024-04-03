import readlinesync = require("readline-sync")
import { Ficcao } from "./src/model/Ficcao"
import { NaoFiccao } from "./src/model/NaoFiccao"
import { LivroController } from "./src/controller/LivroController"

export function main() {
    let livros: LivroController = new LivroController()

    let id, tipo, preco: number
    let titulo, autor, genero, tema: string
    const tiposLivro = ["Ficcao", "Nao-ficcao"]

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
            process.exit(0)
        }

        switch(opcao) {
            case 1:
                console.log("\nListando todos os livros...")
                livros.listarTodos()
                keyPress()
                break
            case 2:
                console.log("\nProcurando livro por Id...")
                id = readlinesync.questionInt("Digite o ID do livro: ")
                livros.consultarPorId(id)
                keyPress()
                break
            case 3:
                console.log("\nCadastrando novo livro...")
                titulo = readlinesync.question("Digite o titulo da obra: ")
                autor = readlinesync.question("Digite o autor(a): ")
                tipo = readlinesync.keyInSelect(tiposLivro, "", {cancel: false}) + 1
                preco = readlinesync.questionFloat("Digite o valor da obra: ")

                switch(tipo){
                    case 1:
                        genero = readlinesync.question("Digite o genero: ")
                        livros.cadastrar(new Ficcao(livros.gerarId(), titulo, autor, tipo, preco, genero))
                        break
                    case 2: 
                        tema = readlinesync.question("Digite o tema abordado: ")
                        livros.cadastrar(new NaoFiccao(livros.gerarId(), titulo, autor, tipo, preco, tema))
                        break
                }
                keyPress()
                break
            case 4:
                console.log("\nAtualizando informações de um livro...")
                id = readlinesync.questionInt("Digite o ID do livro: ")

                let livro = livros.buscarLivroNoArray(id)
                if(livro !== null) {
                    titulo = readlinesync.question("Digite o titulo da obra: ")
                    autor = readlinesync.question("Digite o autor(a): ")
                    tipo = livro.tipo
                    preco = readlinesync.questionFloat("Digite o valor da obra: ")
                    switch(tipo) {
                        case 1:
                            genero = readlinesync.question("Digite o genero: ")
                            livros.atualizar(new Ficcao(id, titulo, autor, tipo, preco, genero))
                            break
                        case 2: 
                            tema = readlinesync.question("Digite o tema abordado: ")
                            livros.atualizar(new NaoFiccao(id, titulo, autor, tipo, preco, tema))
                            break
                    }
                } else {
                    console.log("Livro não encontrado!")
                }
                keyPress()
                break
            case 5:
                console.log("\nRemovendo livro do acervo...")
                id = readlinesync.questionInt("Digite o ID do livro: ")
                livros.deletar(id)
                keyPress()
                break
            default:
                console.log("\nOpção inválida! Digite novamente.")
                keyPress()
                break
        }
    }
}

function keyPress(): void {
    console.log("Pressione ENTER para continuar...")
    readlinesync.prompt()
}

function about(): void {
    console.log(`Projeto desenvolvido por: Beatriz Alves \ngithub.com/beatrizalsilva`)
}

main()