import { Livro } from "../model/Livro"

export interface LivroRepository {
    // CRUD da livraria
    listarTodos(): void
    consultarPorId(id: number): void
    cadastrar(livro: Livro): void
    atualizar(livro: Livro): void
    deletar(id: number): void
}