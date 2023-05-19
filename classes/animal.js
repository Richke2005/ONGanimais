class Animal{
    constructor(raca, tamanho, descricao, isVacinacao){
        this.raca = raca;
        this.tamanho = tamanho;
        this.descricao = descricao;
        this.isVacinacao = isVacinacao;
        this.dataCadastro = new Date()
    }

    getRaca(){
        return raca;
    }

    setRaca(raca){
        this.raca = raca;
    }

    getTamanho(){
        return tamanho;
    }

    setTamanho(tam){
        this.tamanho = tam;
    }

    getDescricao(){
        return this.descricao;
    }

    setDescricao(descricao){
        this.descricao = descricao
    }

    getDataCad(){
        return this.dataCadastro
    }

}



let animal1 = new Animal('puodle', 'medio', 'peguei na rua', true);

