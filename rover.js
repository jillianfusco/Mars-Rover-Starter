class Rover {
   constructor(position) {
      this.position = position;
      this.mode = "NORMAL";
      this.generatorWatts = 110
   }

   receiveMessage(message) {
      let results = [];
      
      for (let command of message.commands) {
         if (command.commandType === "STATUS_CHECK") {
            results.push({
               completed: true,
               roverStatus: {
                  mode: this.mode,
                  generatorWatts: this.generatorWatts,
                  position: this.position
               }
            });
         } else if (command.commandType === "MODE_CHANGE") {
            this.mode = command.value;
            results.push({completed: true});
         } else {
            results.push({completed: false});
         }
      }

      return {
         message:message.name,
         results: results
      }
   }
}

// let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
// let message = new Message('Test message with two commands', commands);
// "response returned by receiveMessage contains the name of the message"

module.exports = Rover;