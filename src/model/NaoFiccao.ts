import { Livro } from "./Livro"

export class NaoFiccao extends Livro {
    private _tema: string

    constructor(id: number, titulo:string, autor: string, tipo: number, preco: number, tema: string) {
        super(id, titulo, autor, tipo, preco)
        this._tema = tema
    }

    public get tema(){
        return this._tema
    } public set tema(tema: string) {
        this._tema = tema
    }

    public visualizar(): void {
        super.visualizar()
        console.log(`   Tema abordado: ${this._tema}`)
    }
}