class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110
   }

   receiveMessage(message) {
      let results = {
         message: message.name,
         commands: message.commands
      }
      return results;
   }
}

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// "response returned by receiveMessage contains the name of the message"

module.exports = Rover;