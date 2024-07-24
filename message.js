const Command = require('./command.js');

class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error('Name required.');
      }
      this.commands = commands;//array of commands if multiple
   }
}

let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
let message = new Message('Test message with two commands(from messages.js)', commands);
for (let command of message.commands) {
   console.log(`for.. of loop- commandType: ${command.commandType} & value: ${command.value}`)
}
console.log(`message from message.js : `);
console.log(message);

module.exports = Message;