dataStreamer.writeNumber(9600)
basic.forever(function () {
	
})
basic.forever(function () {
    dataStreamer.writeNumberArray([Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueR), Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueG), Module_World_Color.GetRGBValue(Module_World_Color.enGetRGB.GetValueB)])
    dataStreamer.writeLine()
    basic.pause(100)
})
