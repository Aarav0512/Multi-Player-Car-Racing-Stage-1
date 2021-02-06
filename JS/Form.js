class Form{
    constructor(){} 
    display(){
    var input = createInput("") 
    var button = createButton("PLAY") 
    var title = createElement('h2') 
    title.html("MULTI PLAYER CAR RACING GAME") 
    var greeting = createElement('h3') 
    title.position(300,10) 
    input.position(500,150)
    button.position(520,230)
    button.mousePressed(function(){
        input.hide()
        button.hide()
        var name = input.value() 
        playerCount = playerCount + 1
        player.update(name)
        player.updateCount(playerCount) 
        greeting.html("HELLO"+name)
    }) 
    }  
}             