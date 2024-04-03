import { Livro } from "./Livro"

export class Ficcao extends Livro {
    private _genero: string

    constructor(id: number, titulo:string, autor: string, tipo: number, preco: number, genero: string) {
        super(id, titulo, autor, tipo, preco)
        this._genero = genero
    }

    public get genero(){
        return this._genero
    } public set genero(genero: string) {
        this._genero = genero
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`   Gênero: ${this._genero}`)
    }
}