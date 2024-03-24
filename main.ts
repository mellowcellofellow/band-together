namespace SpriteKind {
    export const Press = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Press, SpriteKind.Projectile, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        info.changeScoreBy(200)
        sprites.destroy(otherSprite)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (GameState == 1) {
        info.changeScoreBy(-100)
    }
})
function DrumLevel1 () {
    GameState = 1
    music.play(music.createSong(assets.song`Drum Level 1`), music.PlaybackMode.InBackground)
    pause(1550)
    PairofEighths()
    QuarterNote()
    PairofEighths()
    QuarterNote()
    PairofEighths()
    QuarterNote()
    PairofEighths()
    QuarterNote()
    for (let index = 0; index < 6; index++) {
        QuarterNote()
        QuarterNote()
        QuarterNote()
        QuarterNote()
        QuarterNote()
        QuarterNote()
        QuarterNote()
        PairofEighths()
    }
    for (let index = 0; index < 2; index++) {
        PairofEighths()
        QuarterNote()
        QuarterNote()
        QuarterNote()
        QuarterNote()
        QuarterNote()
        QuarterNote()
        PairofEighths()
    }
    for (let index = 0; index < 2; index++) {
        PairofEighths()
        PairofEighths()
        QuarterNote()
        QuarterNote()
    }
    for (let index = 0; index < 2; index++) {
        PairofEighths()
        PairofEighths()
        PairofEighths()
        PairofEighths()
    }
    QuarterNote()
    GameState = 0
}
function QuarterNote () {
    Quarter = sprites.create(assets.image`QuarterPic`, SpriteKind.Projectile)
    Quarter.setPosition(161, 108)
    Quarter.setVelocity(-50, 0)
    pause(520)
    Quarter.setFlag(SpriteFlag.DestroyOnWall, true)
}
function Load_Intro_Sequence () {
    scene.setBackgroundImage(assets.image`School Front`)
    game.showLongText("Hey PLAYER! Starting at a new School can be tough. I wonder if you will be able to meet anyone cool?", DialogLayout.Bottom)
    game.showLongText("What's this? A poster? For a Battle of the Bands?", DialogLayout.Bottom)
    game.showLongText("\"Battle this Friday, all bands should have a singer, guitar, bass and drums.\"", DialogLayout.Bottom)
    game.showLongText("That sounds like a way to meet people. I wonder where I'm going to find people to join my band?", DialogLayout.Bottom)
}
function BassClass () {
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.setBackgroundImage(assets.image`Bass Room`)
    scene.centerCameraAt(0, 0)
    mySprite2 = sprites.create(assets.image`Point`, SpriteKind.Press)
    mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
    mySprite.setPosition(21, 108)
    mySprite2.setPosition(21, 112)
    controller.moveSprite(mySprite, 0, 0)
    game.splash("Get Ready!")
}
function Load_School_View () {
    scene.setBackgroundImage(img`
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        ................................................................................................................................................................
        `)
    tiles.setCurrentTilemap(tilemap`School View Tilemap`)
    mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
    controller.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
    tiles.placeOnTile(mySprite, tiles.getTileLocation(11, 23))
}
function PairofEighths () {
    firsteighth = sprites.create(assets.image`First EighthPic`, SpriteKind.Projectile)
    firsteighth.setPosition(161, 108)
    firsteighth.setVelocity(-50, 0)
    pause(260)
    firsteighth.setFlag(SpriteFlag.DestroyOnWall, true)
    second_eighth = sprites.create(assets.image`SecondEighthPic`, SpriteKind.Projectile)
    second_eighth.setPosition(161, 108)
    second_eighth.setVelocity(-50, 0)
    pause(280)
    second_eighth.setFlag(SpriteFlag.DestroyOnWall, true)
}
function DrumClass () {
    tiles.setCurrentTilemap(tilemap`level3`)
    scene.setBackgroundImage(assets.image`Bass Room`)
    scene.centerCameraAt(0, 0)
    mySprite2 = sprites.create(assets.image`Point`, SpriteKind.Press)
    mySprite = sprites.create(assets.image`Player`, SpriteKind.Player)
    mySprite.setPosition(21, 108)
    mySprite2.setPosition(21, 112)
    controller.moveSprite(mySprite, 0, 0)
    game.splash("Get Ready!")
    DrumLevel1()
}
function WholeNote () {
    Whole = sprites.create(assets.image`WholePic`, SpriteKind.Projectile)
    Whole.setPosition(161, 108)
    Whole.setVelocity(-50, 0)
    pause(520)
    Whole.setFlag(SpriteFlag.DestroyOnWall, true)
}
let Whole: Sprite = null
let second_eighth: Sprite = null
let firsteighth: Sprite = null
let mySprite: Sprite = null
let mySprite2: Sprite = null
let Quarter: Sprite = null
let GameState = 0
Load_Intro_Sequence()
Load_School_View()
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile0`)) {
        DrumClass()
    }
    if (mySprite.tileKindAt(TileDirection.Top, assets.tile`myTile1`)) {
        BassClass()
    }
})
