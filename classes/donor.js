export class Donor{
      #id;
      #nome;
      #email;
      #celular;
      #localizacao;

     constructor(id, nome, email, celular){
        this.#id = id
        this.#nome = nome
        this.#email = email
        this.#celular = celular
        this.dataCadastro = new Date().toUTCString()
     }

     getNome(){
      return this.#nome
     }

     setNome(nome){
      this.#nome = nome
     }

     getEmail(){
      return this.#email
     }

     setEmail(email){
      this.#email = email
     }

     getCelular(){
      return this.#celular
     }

     setCelular(celular){
      this.#celular = celular
     }

     getLocalizacao(){
      return this.#localizacao
      
     }

     setLocalizacao(localizacao){
      this.#localizacao = localizacao
     }
   
   
}


