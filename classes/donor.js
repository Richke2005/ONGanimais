export class Donor{
      #cpf;
      #nome;
      #email;
      #celular;
      #endereco;

     constructor(cpf, nome, email, celular, endereco) {
        this.#id = id
        this.#nome = nome
        this.#email = email
        this.#celular = celular
        this.#endereco = endereco
        this.dataCadastro = new Date().toUTCString()
     }

     get getNome(){
      return this.#nome
     }

     set setNome(nome){
      this.#nome = nome
     }

     get getEmail(){
      return this.#email
     }

     set setEmail(email){
      this.#email = email
     }

     get getCelular(){
      return this.#celular
     }

     set setCelular(celular){
      this.#celular = celular
     }

     get getEndereco(){
      return this.#endereço
     }
     
     set setEndereco(endereco){
      this.#endereco = endereco
     }
   
   
}


