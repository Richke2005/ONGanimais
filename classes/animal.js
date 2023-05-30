export class Animal{
    name
    race
    #size
    #description
    #url
    #registerDate
    constructor(name, race, size, description, url){
        this.name = name;
        this.race = race;
        this.#size = size;
        this.#description = description;
        this.#url = url
        this.#registerDate = new Date()
    }
    get getName(){
        return this.name.toUpperCase();
    }

    set setName(name){
        this.name = name;
    }

    get getRace(){
        return this.race;
    }

    set setRace(race){
        this.race = race;
    }

    get getSize(){
        return this.#size;
    }

    set setSize(size){
        this.#size = size
    }

    get getDescription(){
        return this.#description;
    }

    set setDescription(description){
        this.#description = description;
    }
    get getUrl(){
        return this.#url;
    }

    set setUrl(url){
        this.#url = url;
    }

    get getRegisterDate(){
        return this.#registerDate;
    }

}




