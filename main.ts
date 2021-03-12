radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
    }
    if (receivedNumber == 1) {
        basic.showIcon(IconNames.Sad)
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    basic.showIcon(IconNames.Happy)
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.showIcon(IconNames.Sad)
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Yes)
    basic.pause(5000)
    basic.clearScreen()
})
basic.forever(function () {
	
})
