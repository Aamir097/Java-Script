class Notification{
    send(message){
        console.log("Default notification:",message);
    }
}

class EmailNotification extends Notification{
    send(message){
        console.log("Email:",message);
    }
}

class WhatsAppNotification extends Notification{
    send(message){
        console.log("WhatsApp:",message);
    }
}

class PushNotification  extends Notification{
    send(message){
        console.log("Push:",message);
    }
}

function notifyAll(users, notification){
    users.forEach(user => notification.send(`Hello ${user}`));
}

let user = ["Aamir","Ahad","Saad"];

notifyAll(user, new EmailNotification());
notifyAll(user, new WhatsAppNotification());
notifyAll(user, new PushNotification());
