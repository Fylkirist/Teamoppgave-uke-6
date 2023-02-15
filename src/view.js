const gameWindow = document.getElementById("windowBox")
let progressbar1 = 100;
let progressbar2 = 100;


const cars = [
    /*bro cars*/        [  "blue_car.png","green_car.png","turqish_car.png","purple_car.png"],
    /*ikke bro cars*/   ["orange_car.png","silver_car","police_car.png"]
];

renderGame()
function renderGame() {
  gameWindow.innerHTML=/*HTML*/`
    <div id="pictureBox">
      <img src="assets/roadSprite.png" id="backgroundLayer"></img>
      ${renderForegroundElements()}
    </div>
    ${renderUiElement()}
    <div id="textBox">
    </div>
  `;
}

function renderForegroundElements(){
  const foregroundLayer = `
    <div id="foregroundLayer">
      <img style="top:${playerPosition.y}px;left:${playerPosition.x}px;" src="assets/cars/red_car.png" id="playerCar"></img>
      <img style="top:${carPosition.y}px;left:${carPosition.x}px;" src="assets/cars/${cars[0][0]}" id="sideCars"></img>
    </div>
  `;
  return foregroundLayer
}

// render the UI elements (health, score, reset button)
function renderUiElement() {
    const Ui = `
    <div id="sideBoxNorth" style = "width:${
      (progressbar1 / 300) * 100
    }px">${progressbar1}</div>
    <div id="sideBoxSouth" style = "width:${
      (progressbar2 / 300) * 100
    }px">${progressbar2}</div>
    `;

    return Ui
}

