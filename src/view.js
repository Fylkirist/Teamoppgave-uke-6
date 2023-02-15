const gameWindow = document.getElementById("windowBox")

const cars = [
    /*bro cars*/        ["blue_car.png","green_car.png","turqish_car.png","purple_car.png"],
    /*ikke bro cars*/   ["orange_car.png","silver_car","police_car.png"]
];

renderGame()
//Denne funksjonen oppdaterer hele skjermen
function renderGame(){
    gameWindow.innerHTML=/*HTML*/`
    <div id="pictureBox">
        <img src="assets/roadSprite.png" id="backgroundLayer"></img>
        ${renderForegroundElements()}
    </div>
    <div id="sideBoxNorth"></div>
    <div id="sideBoxSouth"></div>
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
    `;
    return foregroundLayer
}


function renderUiElement() {
    const Ui = `
    <div id="health"></div>
    <div id="points"></div>
    <div id="reset"></div>
    `;

    return Ui
}