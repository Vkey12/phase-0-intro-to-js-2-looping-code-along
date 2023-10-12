function writeCards(names, event){
    const thankYouMessages = [];

    for (let i = 0; i < names.lenth; i++){
        const message = 'Thank you, ${names[i]}, for the wonderful ${eventName} gift!'; 
        thankYouMessages.push(message);
    }

    return messages;
}

const names = ["Ada", "Brendan", "Ali"];
const event = "birthday";
const messages = writeCards(names, event);
console.log(messages);

function countDown(number){
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}

countDown(4)