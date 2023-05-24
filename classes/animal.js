export class Animal{
    name
    race
    #size
    #description
    #registerDate
    isVaccinated
    constructor(name, race, size, description, isVaccinated){
        this.name = name;
        this.race = race;
        this.#size = size;
        this.#description = description;
        this.isVaccinated = isVaccinated;
        this.#registerDate = new Date()
    }
    get getName(){
        return this.name;
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

    setSize(length, height){
        this.#size = {
            length: length,
            height: height
        }
    }

    get getDescription(){
        return this.#description;
    }

    set setDescription(description){
        this.#description = description;
    }

    get getIsVaccinated(){
        return this.isVaccinated;
    }

    set setIsVaccinated(bool){
        this.isVaccinated = bool;
    }

    get getRegisterDate(){
        return this.#registerDate;
    }

}




