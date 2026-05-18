let strip = neopixel.create(DigitalPin.P1, 30, NeoPixelMode.RGB)
strip.showColor(neopixel.colors(NeoPixelColors.Orange))
strip.setPixelColor(9, neopixel.colors(NeoPixelColors.Green))
strip.show()
