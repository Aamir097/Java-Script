class Payment{
    pay(amount){
        console.log(`paying ${amount}`);
    }
}

class CreditCard extends Payment{
    pay(amount){
        console.log(`Paid ${amount} using credit card`);
    }
} 

class UPI extends Payment{
    pay(amount){
        console.log(`Paid ${amount} using UPI`);
    }
}

let payment= [new CreditCard(), new UPI()];
payment.forEach(p => p.pay(700));