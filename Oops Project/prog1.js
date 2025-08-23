class Animals{
    types(){
        console.log("Tere are two types of Animals");
    }
}

class Domestic extends Animals{
    types(){
        console.log("Domestic Animals");
    }
}

class Wild extends Animals{
    types(){
        console.log("Wild Animals");
    }
}

let Animal= [new Animals(), new Domestic(), new Wild()];

Animal.forEach(animal => {
    animal.types();
});