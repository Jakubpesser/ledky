// let strip = neopixel.create(DigitalPin.P16, 80, NeoPixelMode.RGB)// 2. cislo je pocet ledek

// // strip.showColor(neopixel.hsl(1, 99, 20)) //1. cislo je barva, 2. je sytost barvy, 3. je jas
// // strip.setPixelColor(2, neopixel.hsl(1, 99, 20)) toto rozsvítí jen jednu ledku (v tomoto případě tu s číslem 2)
// strip.showRainbow(0,359)
// strip.show()
// basic.forever(function() {
//     strip.rotate(1)
//     strip.show()
//     basic.pause(500)
// })


function ping(
    trig: DigitalPin,
    echo: DigitalPin,
    maxCmDistance = 500): number {
        pins.setPull(trig, PinPullMode.PullNone)
        pins.digitalWritePin(trig, 0)
        control.waitMicros(2)
        pins.digitalWritePin(trig, 1)
        control.waitMicros(10)
        pins.digitalWritePin(trig, 0)
        let duration = pins.pulseIn(echo, PulseValue.High, 1/340 * 10)
        return duration
    }
basic.forever(function() {
    console.logValue("d", ping(DigitalPin.P8, DigitalPin.P15))
})
