input.onButtonPressed(Button.A, function () {
    basic.showString("" + (input.lightLevel()))
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(input.temperature())
})
basic.forever(function () {
    while (input.temperature() < 8) {
        music.playMelody("C C C D D D C C ", 225)
        basic.showString("poca temp")
    }
})
basic.forever(function () {
    while (input.lightLevel() < 100) {
        music.playMelody("G G B B B B G G ", 225)
        basic.showString("poca luz")
    }
})
basic.forever(function () {
    while (input.temperature() > 30) {
        music.playMelody("C5 B A G G A B C5 ", 225)
        basic.showString("temp alta")
    }
})
basic.forever(function () {
    while (input.lightLevel() > 200) {
        music.playMelody("B C5 B A A B C5 B ", 225)
        basic.showString("luz alta")
    }
})
