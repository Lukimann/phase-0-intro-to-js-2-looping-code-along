// Code your solutions in this file
 const names = ['Guadalupe', 'Ollie', 'Aki']

 function writeCards(names, event) {
    let message = [];
    for (let i = 0; i < names.length; i++) {
        message.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return message;
 }
 const event = 'surprise'
 const message = writeCards(names, event)
 

 function countDown(numbers) {
    while (numbers >= 0) {
        console.log(numbers);
        numbers--;
    }
 }
 countDown(10)




//I tried this like 2oo










 /*const names = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(names, eventName) {
    for (let i = 0; i < names.length; i++) {
        console.log(`"Thank you, ${names[i]}, for the wonderful surprise gift at ${eventName}!"`);
    }
    return names;
}

const eventName = 'Birthday'; // Replace 'Birthday' with the actual event name
writeCards(names, eventName);*/
