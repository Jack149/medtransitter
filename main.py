def on_received_number(receivedNumber):
    if receivedNumber == 0:
        basic.show_icon(IconNames.HAPPY)
    if receivedNumber == 1:
        basic.show_icon(IconNames.SAD)
radio.on_received_number(on_received_number)

def on_button_pressed_a():
    radio.send_number(0)
    basic.show_icon(IconNames.HAPPY)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_gesture_tilt_left():
    radio.send_number(2)
    basic.show_icon(IconNames.YES)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_forever():
    pass
basic.forever(on_forever)
