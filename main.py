def on_received_number(receivedNumber):
    if receivedNumber == 0:
        music.play_melody("C5 B A G F E D C ", 120)
        basic.show_string("HELP")
        basic.pause(2000)
        basic.clear_screen()
    if receivedNumber == 1:
        music.play_melody("E D G F B A C5 B ", 120)
        basic.show_string("DINNER")
        basic.pause(2000)
        basic.clear_screen()
    if receivedNumber == 2:
        basic.show_icon(IconNames.YES)
        music.set_built_in_speaker_enabled(True)
        music.set_volume(255)
        soundExpression.giggle.play()
        basic.pause(1000)
        basic.clear_screen()
    if receivedNumber == 3:
        music.set_built_in_speaker_enabled(True)
        music.set_volume(255)
        soundExpression.giggle.play()
        basic.show_string("WATER")
        basic.pause(2000)
        basic.clear_screen()
    if receivedNumber == 4:
        music.set_built_in_speaker_enabled(True)
        for index in range(4):
            music.set_volume(255)
            soundExpression.sad.play()
            basic.show_string("CRASH")
            basic.pause(200)
            basic.clear_screen()
    if receivedNumber == 5:
        music.set_built_in_speaker_enabled(True)
        music.set_volume(255)
        soundExpression.spring.play()
        for index2 in range(2):
            basic.show_string("WATER")
            basic.pause(100)
            basic.clear_screen()
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(0)
    soundExpression.hello.play()
    basic.show_string("HELP")
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_logo_up():
    radio.send_number(2)
    basic.show_icon(IconNames.HEART)
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    radio.send_number(2)
    basic.show_icon(IconNames.HEART)
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_sound_loud():
    pass
input.on_sound(DetectedSound.LOUD, on_sound_loud)

def on_button_pressed_b():
    radio.send_number(1)
    soundExpression.happy.play()
    basic.show_string("DINNER")
    basic.pause(5000)
    basic.clear_screen()
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_gesture_shake():
    input.set_accelerometer_range(AcceleratorRange.TWO_G)
    radio.send_number(4)
    for index3 in range(4):
        music.play_melody("C5 A B G A F G E ", 120)
        basic.pause(500)
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

def on_gesture_tilt_right():
    radio.send_number(2)
    basic.show_icon(IconNames.HEART)
    basic.pause(2000)
    basic.clear_screen()
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_logo_pressed():
    radio.send_number(5)
    for index4 in range(2):
        basic.show_string("WATER ")
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_pressed)

radio.set_transmit_power(7)
music.set_built_in_speaker_enabled(True)

def on_forever():
    pass
basic.forever(on_forever)
