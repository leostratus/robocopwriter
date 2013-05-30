var five = require("johnny-five");

new five.Board().on("ready", function() {

    // Set up the servos

    var servoFL = new five.Servo({
        pin: "O0",
        type: "continuous"
    })
    , servoFR = new five.Servo({
        pin: "O1",
        type: "continuous"
    })
    , servoRL = new five.Servo({
        pin: "O3",
        type: "continuous"
    });
    , servoRR = new five.Servo({
        pin: "O2",
        type: "continuous"
    });

    // Test motion to make sure wheels all go in the right direction, 
    // because after a night of drinking mental models are HARD

    servoFL.move(110);
    servoFR.move(-110);
    servoRL.move(110);
    servoRR.move(-110);

    // LEDs?

    


});