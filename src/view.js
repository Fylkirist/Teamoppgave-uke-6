const gameWindow = document.getElementById("windowBox")
let progressbar1 = 100;
let progressbar2 = 0;


renderGame()
//Denne funksjonen oppdaterer hele skjermen
function renderGame(){
    gameWindow.innerHTML=/*HTML*/`
    <div id="pictureBox">
        <img src="assets/roadSprite.png" id="backgroundLayer"></img>
        ${renderForegroundElements()}
    </div>
    <div id="sideBox"></div>
    <div id="textBox">
    ${renderUiElement()}
    </div>
    `;
}
//Her tegner vi alle forgrunnselementer (bilen, brødre, gjenstander i veien, etc)
function renderForegroundElements(){
    const foregroundLayer = `
    <div id="foregroundLayer">
        <img style="top:${playerPosition.y}px;left:${playerPosition.x}px;" src="assets/cars/red_car.png" id="playerCar"></img>
    </div>
    `
    return foregroundLayer
}

function renderUiElement() {
    const Ui = `
    <div id="health" style="width:${
        (progressbar1 / 100) * 300
      }px">${progressbar1}</div>
    <div id="points">${progressbar2}</div>
    <div id="reset"></div>
    `;

    return Ui
}

function updateProgressbar1() {
    if(progressbar1 > 0) {
    }
}