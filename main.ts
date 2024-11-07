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
})
function init () {
    radio.setGroup(frequency)
    awaitingInitResponse = true
    radio.sendNumber(1)
}
let frequency = 0
let awaitingInitResponse = false
awaitingInitResponse = false
frequency = 152
init()
