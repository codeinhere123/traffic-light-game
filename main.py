def on_button_pressed_a():
    global random_light, rand_time
    random_light = randint(0, 1)
    rand_time = randint(2000, 10000)
input.on_button_pressed(Button.A, on_button_pressed_a)

def my_function():
    if random_light == 0:
        edubitTrafficLightBit.toggle_led(LedColor.RED)
        basic.pause(rand_time)
        edubitTrafficLightBit.toggle_led(LedColor.RED)
    else:
        edubitTrafficLightBit.toggle_led(LedColor.GREEN)
        basic.pause(rand_time)
        edubitTrafficLightBit.toggle_led(LedColor.GREEN)
edubitIrBit.on_ir_sensor_event(IrEventType.FALL, my_function)

rand_time = 0
random_light = 0
for index in range(2):
    music.play_melody("F G C - A - C - ", 400)