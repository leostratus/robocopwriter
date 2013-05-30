var five = require("johnny-five");

var board = new five.Board();

board.on("ready", function() {
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
    })
    , servoArm = new five.Servo("O4");

    // Test motion to make sure wheels all go in the right direction, 
    // because after a night of drinking mental models are HARD

    function go(){
        servoFL.move(110);
        servoFR.move(-110);
        servoRL.move(110);
        servoRR.move(-110);
    }

    function goback(){
        servoFL.move(-110);
        servoFR.move(110);
        servoRL.move(-110);
        servoRR.move(110);
    }

    function stop(){
        servoFL.move(90);
        servoFR.move(90);
        servoRL.move(90);
        servoRR.move(90);
    }

    function up(){
        servoArm.move(30);
    }

    function down(){
        servoArm.move(0);
    }

    function lightup(){
        // Be RoboCop/blink the LEDs
        var blueHigh = new five.Pin(2).high()
        , blueLed = new five.Led(3)
        , blueLow = new five.Pin(4).low()
        , redHigh = new five.Pin(12).high
        , redLed = new five.Led(13)
        , redLow = new five.Pin(14).low();
        blueLed.pulse();
        redLed.pulse();
    }

    function init(){
        lightup();
        stop();
        up();
    }

    var bot = {
        init: init
        go: go,
        goback: goback,
        stop: stop,
        up: up,
        down: down,
        lightup: lightup
    };

    board.repl.inject({bot: bot});

    bot.init();


});