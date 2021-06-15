edubitIrBit.onIrSensorEvent(IrEventType.Rise, function () {
    Game_over = 1
    music.playMelody("C5 B A G F E D C ", 300)
})
input.onButtonPressed(Button.A, function () {
    Game_over = 0
    while (Game_over == 0) {
        random_light = randint(0, 1)
        rand_time = randint(2000, 10000)
        if (random_light == 0) {
            edubitTrafficLightBit.toggleLed(LedColor.Red)
            basic.pause(rand_time)
            edubitTrafficLightBit.toggleLed(LedColor.Red)
        } else {
            edubitTrafficLightBit.toggleLed(LedColor.Green)
            basic.pause(rand_time)
            edubitTrafficLightBit.toggleLed(LedColor.Green)
        }
    }
})
let rand_time = 0
let random_light = 0
let Game_over = 0
for (let index = 0; index < 2; index++) {
    music.playMelody("F G C - A - C - ", 400)
}
