let strip = neopixel.create(DigitalPin.P16, 80, NeoPixelMode.RGB)// 2. cislo je pocet ledek

// strip.showColor(neopixel.hsl(1, 99, 20)) //1. cislo je barva, 2. je sytost barvy, 3. je jas
strip.showRainbow(0,359)
strip.show()
basic.forever(function() {
    strip.rotate(1)
    strip.show()
    basic.pause(500)
})