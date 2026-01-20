function HomeScreen () {
    mySprite2 = sprites.create(image.create(4, 160), SpriteKind.Player)
    mySprite2.y += 10
    for (let index = 0; index <= 25; index++) {
        mySprite2.image.drawTransparentImage(img`
            3 3 3 3 
            3 3 3 3 
            3 3 3 3 
            3 3 3 3 
            3 3 3 3 
            2 2 2 2 
            `, 0, index * 6)
        pause(50)
    }
    for (let index = 0; index <= 5; index++) {
        mySprite.image.drawLine(18, 190 - index, 61, 190 - index, 3)
        pause(50)
    }
    for (let index2 = 0; index2 <= 14; index2++) {
        for (let index = 0; index <= 9; index++) {
            mySprite.image.drawLine(17 - index2, 184 - index - index2 * 10, 62 + index2, 184 - index - index2 * 10, 3)
            mySprite.image.drawLine(17 - index2, 183 - index - index2 * 10, 62 + index2, 183 - index - index2 * 10, 2)
            mySprite.image.drawLine(17 - index2, 182 - index - index2 * 10, 62 + index2, 182 - index - index2 * 10, 1)
            pause(50)
        }
    }
    for (let index = 0; index < 150; index++) {
        mySprite.image.drawTransparentImage(assets.image`Boba`, randint(17, 62), randint(180, 190))
        pause(1)
    }
    for (let index = 0; index < 125; index++) {
        mySprite.image.drawTransparentImage(assets.image`Boba`, randint(16, 63), randint(170, 180))
        pause(1)
    }
    sprites.destroy(mySprite2)
    for (let index = 0; index < 100; index++) {
        mySprite.image.drawTransparentImage(assets.image`Boba`, randint(15, 64), randint(160, 170))
        pause(1)
    }
    for (let index = 0; index < 75; index++) {
        mySprite.image.drawTransparentImage(assets.image`Boba`, randint(14, 65), randint(150, 160))
        pause(1)
    }
    for (let index = 0; index < 25; index++) {
        mySprite.image.drawTransparentImage(assets.image`Boba`, randint(13, 66), randint(140, 150))
        pause(1)
    }
    mySprite.image.drawTransparentImage(assets.image`myImage`, 0, 0)
    mySprite.image.drawTransparentImage(assets.image`Straw`, 70, 4)
    mySprite3 = sprites.create(assets.image`myImage0`, SpriteKind.Player)
    mySprite3.setPosition(256, 232)
    mySprite3.setScale(2, ScaleAnchor.Middle)
    animation.runMovementAnimation(
    mySprite,
    animation.animationPresets(animation.bobbing),
    2000,
    true
    )
    mySprite3 = sprites.create(assets.image`myImage1`, SpriteKind.Player)
    mySprite3.setScale(6, ScaleAnchor.Middle)
    mySprite3.setPosition(256, 290)
    mySprite3.z = 3
    scene.setBackgroundColor(5)
    for (let index = 0; index < 100; index++) {
        scene.backgroundImage().drawTransparentImage(assets.image`myImage2`, randint(0, 512), randint(0, 384))
    }
    for (let index = 0; index < 100; index++) {
        scene.backgroundImage().drawTransparentImage(assets.image`myImage3`, randint(0, 512), randint(335, 375))
    }
    scene.backgroundImage().drawRect(236, 194, 40, 400, 11)
    scene.backgroundImage().fillRect(237, 195, 38, 400, 4)
    scene.backgroundImage().drawRect(50, 192, 400, 140, 8)
    scene.backgroundImage().drawRect(51, 193, 398, 138, 6)
    scene.backgroundImage().drawRect(52, 194, 396, 136, 6)
    scene.backgroundImage().fillRect(53, 195, 394, 134, 7)
    pauseUntil(() => controller.A.isPressed())
}
function Introduction () {
	
}
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
namespace userconfig {
export const ARCADE_SCREEN_WIDTH = 512
export const ARCADE_SCREEN_HEIGHT = 384
}
stats.turnStats(true)
mySprite = sprites.create(assets.image`myImage`, SpriteKind.Player)
mySprite.z = 2
let customerOrderList = [
[
"Small",
"Medium",
"Large",
"Extra Large"
],
["Strawberry", "Brown Sugar", "Taro"],
["Mango", "Strawberry", "Tapioca"],
["Double Boba", "Normal Boba", "No Boba"],
["Normal Ice", "Half Ice", "No Ice"]
]
let customerOrders = ["Hey I would like a <c9>" + customerOrderList[0][randint(0, 3)] + "</c9> <c9>" + customerOrderList[1][randint(0, 2)] + " Milk Tea</c9> with <c9>" + customerOrderList[2][randint(0, 2)] + "</c9>, <c9>" + customerOrderList[3][randint(0, 2)] + "</c9> and <c9>" + customerOrderList[4][randint(0, 2)]]
HomeScreen()
