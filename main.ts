input.onButtonPressed(Button.A, function () {
    wuKong.setMotorSpeed(wuKong.MotorList.M1, 100)
})
input.onButtonPressed(Button.B, function () {
    wuKong.stopAllMotor()
})
basic.showLeds(`
    # . . . #
    . # . # .
    . . . . .
    # # # # #
    # . # . #
    `)
basic.forever(function () {
	
})
