import { Livro } from "../model/Livro"
import { LivroRepository } from "../repository/LivroRepository"

export class LivroController implements LivroRepository {
    private listaLivros: Array<Livro> = new Array<Livro>()
    public id: number = 0

    listarTodos(): void {
        for(let livro of this.listaLivros) {livro.visualizar()}
    }

    consultarPorId(id: number): void {
        let buscarLivro = this.buscarLivroNoArray(id)
        if(buscarLivro !== null) {
            buscarLivro.visualizar()
        } else {
            console.log("O livro não foi encontrado!")
        }
    }

    cadastrar(livro: Livro): void {
        this.listaLivros.push(livro)
        console.log("\nLivro cadastrado com sucesso no acervo!")
    }

    atualizar(livro: Livro): void {
        let buscarLivro = this.buscarLivroNoArray(livro.id)
        if(buscarLivro !== null) {
            this.listaLivros[this.listaLivros.indexOf(buscarLivro)] = livro
            console.log(`\nO livro com ID ${livro.id} foi atualizado com êxito!`)
        } else {
            console.log("Livro não encontrado!")
        }
    }

    deletar(id: number): void {
        let buscarLivro = this.buscarLivroNoArray(id)
        if(buscarLivro !== null){
            this.listaLivros.splice(this.listaLivros.indexOf(buscarLivro), 1)
            console.log(`O livro com ID ${id} foi excluído com êxito!`)
        }else
            console.log("\nproduto não foi Encontrado!")
    }

    // gerar um id para cada livro cadastrado
    public gerarId(): number {
        return ++ this.id
    }

    // procura livro pelo id no array
    public buscarLivroNoArray(id: number): Livro | null {
        for(let livro of this.listaLivros) {
            if(livro.id === id) {
                return livro
            }
        }
        return null
    }
}