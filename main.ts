radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        music.setVolume(255)
        music.playMelody("C5 B A G F E D C ", 120)
        basic.showString("HELP")
        basic.pause(2000)
        basic.clearScreen()
    }
    if (receivedNumber == 1) {
        music.playMelody("E D G F B A C5 B ", 120)
        basic.showString("DINNER")
        basic.pause(2000)
        basic.clearScreen()
    }
    if (receivedNumber == 2) {
        basic.showIcon(IconNames.Yes)
        music.setBuiltInSpeakerEnabled(true)
        music.setVolume(255)
        soundExpression.giggle.play()
        basic.pause(1000)
        basic.clearScreen()
    }
    if (receivedNumber == 3) {
        music.setBuiltInSpeakerEnabled(true)
        music.setVolume(255)
        soundExpression.giggle.play()
        basic.showString("WATER")
        basic.pause(2000)
        basic.clearScreen()
    }
    if (receivedNumber == 4) {
        music.setBuiltInSpeakerEnabled(true)
        for (let index = 0; index < 4; index++) {
            music.setVolume(255)
            soundExpression.sad.play()
            basic.showString("CRASH")
            basic.pause(200)
            basic.clearScreen()
        }
    }
    if (receivedNumber == 5) {
        music.setBuiltInSpeakerEnabled(true)
        music.setVolume(255)
        soundExpression.spring.play()
        for (let index = 0; index < 2; index++) {
            basic.showString("WATER")
            basic.pause(100)
            basic.clearScreen()
        }
    }
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    soundExpression.hello.play()
    basic.showString("HELP")
})
input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
input.onSound(DetectedSound.Loud, function () {
	
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    soundExpression.happy.play()
    basic.showString("DINNER")
    basic.pause(5000)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    input.setAccelerometerRange(AcceleratorRange.TwoG)
    radio.sendNumber(4)
    for (let index = 0; index < 4; index++) {
        music.playMelody("C5 A B G A F G E ", 120)
        basic.pause(500)
    }
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(2)
    basic.showIcon(IconNames.Heart)
    basic.pause(2000)
    basic.clearScreen()
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(5)
    for (let index = 0; index < 2; index++) {
        basic.showString("WATER ")
    }
})
radio.setTransmitPower(7)
music.setBuiltInSpeakerEnabled(true)
basic.forever(function () {
	
})
