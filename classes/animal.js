export class Animal{
    race
    #size
    #description
    #registerDate
    isVaccinated
    constructor(race, size, description, isVaccinated){
        this.race = race;
        this.#size = size;
        this.#description = description;
        this.isVaccinated = isVaccinated;
        this.#registerDate = new Date()
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

    setSize(width, height){
        this.#size = {
            width: width,
            height: height
        }
    }

    get getDesciption(){
        return this.#description;
    }

    set setDescription(description){
        this.#description = description;
    }

    get getRegisterDate(){
        return this.#registerDate;
    }

}

