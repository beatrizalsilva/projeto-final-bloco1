export abstract class  Livro {
    private _id: number
    private _titulo: string
    private _autor: string
    private _tipo: number
    private _preco: number

    constructor(id: number, titulo:string, autor: string, tipo: number, preco: number) {
        this._id = id
        this._titulo = titulo
        this._autor = autor
        this._tipo = tipo
        this._preco = preco
    }

    public get id() {
        return this._id
    } public set id(id: number) {
        this._id = id
    }

    public get titulo() {
        return this._titulo
    } public set titulo(titulo: string) {
        this._titulo = titulo
    }

    public get autor() {
        return this._autor
    } public set autor(autor: string) {
        this._autor = autor
    }

    public get tipo() {
        return this._tipo
    } public set tipo(tipo: number) {
        this._tipo = tipo
    }

    public get preco() {
        return this._preco
    } public set preco(preco: number) {
        this._preco = preco
    }

    public visualizar(): void {
        let tipo: string = ""

        switch (this._tipo) {
            case 1:
                tipo = "Ficção"
                break
            case 2:
                tipo = "Não-ficção"
                break
        }

        console.log("\n****************************************************")
        console.log("                   Dados do livro:                    ")
        console.log("******************************************************")
        console.log(`   Número do ID: ${this._id}`)
        console.log(`   Título da obra: ${this._titulo}`)
        console.log(`   Autor: ${this._autor}`)
        console.log(`   Tipo: ${tipo}`)
        console.log(`   Valor: ${this._preco.toFixed(2)}`)
    }
}