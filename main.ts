function Load_Intro_Sequence () {
    scene.setBackgroundImage(assets.image`School Front`)
    game.showLongText("Hey PLAYER! Starting at a new School can be tough. I wonder if you will be able to meet anyone cool?", DialogLayout.Bottom)
    game.showLongText("What's this? A poster? For a Battle of the Bands?", DialogLayout.Bottom)
    game.showLongText("\"Battle this Friday, all bands should have a singer, guitar, bass and drums.\"", DialogLayout.Bottom)
    game.showLongText("That sounds like a way to meet people. I wonder where I'm going to find people to join my band?", DialogLayout.Bottom)
}
function Load_School_View () {
    tiles.setCurrentTilemap(tilemap`School View Tilemap`)
}
Load_Intro_Sequence()
