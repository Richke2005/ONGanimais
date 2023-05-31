export class Dono{
      #cpf;
      #nome;
      #email;
      #celular;
      #endereco;
      animalId

     constructor(cpf, nome, email, celular, endereco, animalId) {
        this.#cpf = cpf;
        this.#nome = nome;
        this.#email = email;
        this.#celular = celular;
        this.#endereco = endereco;
        this.animalId = animalId;
        this.dataCadastro = new Date().toUTCString()
     }

     get getCpf(){
      return this.#cpf
     }

     set setCpf(cpf){
      this.#cpf = cpf
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
      return this.#endereco
     }
     
     set setEndereco(endereco){
      this.#endereco = endereco
     }

     get getRegisterDate(){
      return this.dataCadastro
     }
     
     get getAnimalId(){
      return this.animalId
     }
   
     set setAnimalId(animalId){
      this.animalId = animalId
     }
}


