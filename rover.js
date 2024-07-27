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

module.exports = Rover;
