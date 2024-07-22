class Message {
   constructor(name, commands) {
      this.name = name;
      if (!name) {
         throw Error('Name required.');
      }
      this.commands = commands;//array of commands if multiple
   }
}

module.exports = Message;