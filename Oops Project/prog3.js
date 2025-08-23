class Car{
    drive(){
        console.log("Mens Drive Car");
    }
}

class Bike{
    drive(){
        console.log("Boys Drive Bikes");
    }
}

function startJourney(vehicle){
    vehicle.drive();
}


startJourney(new Car());
startJourney(new Bike());