const Message = require('../message.js');
const Command = require('../command.js');

// NOTE: If at any time, you want to focus on the output from a single test, feel free to comment out all the others.
//       However, do NOT edit the grading tests for any reason and make sure to un-comment out your code to get the autograder to pass.

describe("Message class", function() {
    // test 4
    test("throws error if name is NOT passed into constructor as the first parameter", function() {
        let errorMessage = 'Name required.'
        let instantiationAttempt = function() { new Message();}
        expect(instantiationAttempt).toThrow(new Error(errorMessage));
      });

    // test 5
    test("constructor sets name", function () {
        let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let message = new Message('Test message with two commands', commands);
        expect(message.name).toEqual('Test message with two commands');
    });

    // test 6
    test("contains a commands array passed into the constructor as the 2nd argument", function() {
        let commands = [new Command('MODE_CHANGE', 'LOW_POWER'), new Command('STATUS_CHECK')];
        let message = new Message('Test message with two commands', commands);
        expect(message.commands).toEqual(commands);
    });

});
