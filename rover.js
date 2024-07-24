const Message = require("./message.js");
const Command = require("./command.js");

class Rover {
  constructor(position) {
    this.position = position;
    this.mode = "NORMAL";
    this.generatorWatts = 110;
  }

  receiveMessage(message) {
    let results = [];

    // for of loop to refer to each object inside the message.commands array
    for (let commandObj of message.commands) {
      if (commandObj.commandType === "STATUS_CHECK") {
        results.push({
          completed: true,
          roverStatus: {
            mode: this.mode,
            generatorWatts: this.generatorWatts,
            position: this.position,
          },
        });
      } else if (commandObj.commandType === "MODE_CHANGE") {
        this.mode = commandObj.value;
        results.push({
          completed: true,
        });
      } else if (
        commandObj.commandType === "MOVE" &&
        this.mode === "LOW_POWER"
      ) {
        results.push({
          completed: false,
        });
      } else if (commandObj.commandType === "MOVE") {
         this.position = commandObj.value;
        results.push({
          completed: true,
        });
      } 
    }

    console.log(results);

    return {
      message: message.name,
      results: results,
    };
  }
}

// class Rover {
//    constructor(position) {
//       this.position = position;
//       this.mode = "NORMAL";
//       this.generatorWatts = 110
//    }

//    receiveMessage(message) {
//       let results = [];

//       for (let command of message.commands) {
//          if (command.commandType === "STATUS_CHECK") {
//             results.push({
//                completed: true,
//                roverStatus: {
//                   mode: this.mode,
//                   generatorWatts: this.generatorWatts,
//                   position: this.position
//                }
//             });

//          } else if (command.commandType === "MODE_CHANGE") {
//             this.mode = command.value;
//             results.push({completed: true});

//          } else if (command.commandType === "MOVE") {
//             if (this.mode === "LOW_POWER") {
//                results.push({completed: false});

//             } else {
//                this.position = command.value;
//                results.push({
//                   completed: true,
//                   position: this.position
//                })
//             }

//          } else {
//             results.push({completed: false});
//          }
//       }

//       return {
//          message:message.name,
//          results: results
//       };
//    }
// }

module.exports = Rover;
