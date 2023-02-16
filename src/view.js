const gameWindow = document.getElementById("windowBox")

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
      <img style="top:${carPosition.y}px;left:${carPosition.x}px;" src="assets/cars/${cars[carPosition.type][carPosition.id]}.png" id="sideCars"></img>
      <img style="top:${propPosition.y}px;left:${propPosition.x}px;" src="assets/props/${props[propPosition.type][propPosition.id]}.png" id="props"></img>
      <img style="top:${playerPosition.y}px;left:${playerPosition.x}px;" src="assets/cars/red_car.png" id="playerCar"></img>
    </div>
  `;
  return foregroundLayer
}

// render the UI elements (health, score, reset button)
function renderUiElement() {
    const Ui = `
    <div id="sideBoxNorth"><div id="healthBar" style = "bottom:0px; background-color:green; height:${
      progressbar1
    }%">${progressbar1}</div></div>
    <div id="sideBoxSouth"><div id="respectBar" style = "bottom:0px; background-color:blue; height:${
      progressbar2
    }%">${progressbar2}</div></div>
    `;

    return Ui
}

let renderFrames = setInterval(() => {
  renderGame();
  debugWindow();
}, 33);