class Shipping{
    calculate(order){
        return 0;
    }
}

class FedEx extends Shipping{
    calculate(order){
        return order.weight * 15;
    }
}


class Bluedart extends Shipping{
    calculate(order){
        return order.distance * 5;
    }
}

class Delhivery extends Shipping{
    calculate(order){
        return order.weight * 12 + order.distance * 9;
    }
}

function getShippingCost(order, shippingProvider){
    return shippingProvider.calculate(order);
}

let order={weight: 5, distance: 80};

console.log("FedEx:",getShippingCost(order,new FedEx()));
console.log("BlueDart:",getShippingCost(order,new Bluedart()));
console.log("Delhivery:",getShippingCost(order, new Delhivery()));