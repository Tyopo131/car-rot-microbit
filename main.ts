enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    if (true) {
        if (awaitingInitResponse == true) {
            basic.showLeds(`
                . . . . .
                . # . # .
                . . . . .
                # . . . #
                . # # # .
                `)
            awaitingInitResponse = false
            radio.sendNumber(1)
        }
    }
    if (receivedNumber == 2) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # # # .
            # . . . #
            `)
        if (unpaired == false) {
            unpaired = true
            radio.sendNumber(2)
        }
        awaitingInitResponse = false
    }
})
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    radio.sendNumber(2)
})
input.onButtonPressed(Button.A, function () {
	
})
function init () {
    radio.setGroup(frequency)
    awaitingInitResponse = true
    radio.sendNumber(1)
}
let unpaired = false
let frequency = 0
let awaitingInitResponse = false
awaitingInitResponse = false
frequency = 152
init()
