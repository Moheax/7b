radio.onReceivedNumber(function (receivedNumber) {
    led.plotBarGraph(
    radio.receivedPacket(RadioPacketProperty.SignalStrength) + 128,
    86
    )
})
radio.setGroup(1)
radio.setTransmitPower(1)
basic.forever(function () {
    for (let index = 0; index <= 9; index++) {
        radio.sendNumber(index)
        basic.showNumber(index)
        basic.pause(500)
    }
})
