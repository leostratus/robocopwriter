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
    })
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

    // Be RoboCop/blink the LEDs

    var blueHigh = new five.Pin(2).high()
    , blueLed = new five.Led(3)
    , blueLow = new five.Pin(4).low()
    , redHigh = new five.Pin(12).high
    , redLed = new five.Led(13)
    , redLow = new five.Pin(14).low();


    blueLed.pulse();
    redLed.pulse();

});