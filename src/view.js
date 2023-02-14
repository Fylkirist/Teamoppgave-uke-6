const gameWindow = document.getElementById("windowBox")

renderGame()
//Denne funksjonen oppdaterer hele skjermen
function renderGame(){
    gameWindow.innerHTML=/*HTML*/`
    <div id="pictureBox">
        <img src="assets/roadSprite.png" id="backgroundLayer"></img>
        <div id="foregroundLayer">${renderForegroundElements()}</div>
    </div>
    <div id="sideBox"></div>
    <div id="textBox"></div>
    `
}
//Her tegner vi alle forgrunnselementer (bilen, brødre, gjenstander i veien, etc)
function renderForegroundElements(){
    const playerCar = `<img style="top:${playerPosition.y};left:${playerPosition.x};" src="" id="playerCar"></img>`
    return playerCar
}
