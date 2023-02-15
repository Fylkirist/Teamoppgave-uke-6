const gameWindow = document.getElementById("windowBox")
let progressbar1 = 100;
let progressbar2 = 100;


const cars = [
    /*bro cars*/        ["blue_car","green_car","turqish_car","purple_car","banangreen_car","cyan_car","greenpurple_car"],
    /*ikke bro cars*/   ["orange_car_enemy","silver_car_enemy","blue_car_enemy","yellow_car_enemy","grayblue_car_enemy","green_car_enemy","red_car_enemy","midnightpurple_car_enemy"]
];

const props = [
    /*vei hindringer*/  ["boost_arrows","work_brigade","work_cone"],
    /*politi*/          ["police_car","sivil_police_car"]
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
      <img style="top:${carPosition.y}px;left:${carPosition.x}px;" src="assets/cars/${cars[carPosition.type][carPosition.id]}.png" id="sideCars"></img>
      <img style="top:${propPosition.y}px;left:${propPosition.x}px;" src="assets/props/${props[propPosition.type][propPosition.id]}.png" id="props"></img>
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

let renderFrames = setInterval(() => {
  renderGame();
  debugWindow();
}, 33);