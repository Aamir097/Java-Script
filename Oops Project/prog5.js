class Notification{
    send(message){
        console.log("Sending notification:",message);
    }
}

class EmailNotification{
    send(message){
        console.log("Email sent:",message);
    }
}

class WhatsAppNotification{
    send(message){
        console.log("WhatsAppNotification:",message);
    }
}

let notifyusers= [new Notification(), new EmailNotification(), new WhatsAppNotification()];
notifyusers.forEach(n => n.send("Your Order has been Shipped"));