class Payment{
    process(amount){
        console.log(`Processing Payment of ₹${amount}`);
    }
}

class CreditCard extends Payment{
    process(amount){
        console.log(`Paid ₹${amount} using Credit Card`);
    }
}

class UPI extends Payment{
    process(amount){
        console.log(`Paid ₹${amount} using UPI`);
    }
}

class PayPal extends Payment{
    process(amount){
        console.log(`Paid ₹${amount} using PayPal`);
    }
}

function checkout(amount, paymentMethod){
    paymentMethod.process(amount);
}

checkout(8000, new CreditCard());
checkout(1200, new UPI());
checkout(800, new PayPal);