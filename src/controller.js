//denne funksjonen implementerer logikken bak å hilse på bros
function greetHomie(key){
    if (greetingFlag){return}
    let greeting = new Audio(`assets/${key}.mp3`)
    greeting.play()
    if (propPosition.type==1){
        progressbar2-=10
        progressbar1-=10
    }
    else if(key=="e" && carPosition.type==1 ||
    key=="r" && carPosition.type==0){
        progressbar2+=10
    }
    else{
        progressbar2-=10
    }
    if(progressbar2<0){
        progressbar2=0
    }
    if (progressbar1<0){
        //funksjon for å håndtere tap
    }
    greetingFlag=true 
}


//dette gjør at du kan styre bilen med piltastene/wasd
characterController()
function characterController() {

    document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowDown" || event.key === "s") {
    playerPosition.y += 10;
    } else if (event.key === "ArrowUp" || event.key === "w") {
    playerPosition.y -= 10;
    } else if (event.key === "ArrowLeft" || event.key === "a") {
    playerPosition.x -= 10;
    } else if (event.key === "ArrowRight" || event.key === "d") {
    playerPosition.x += 10;
    }
    if(event.key ==="e" || event.key ==="r"){
        greetHomie(event.key)
    }
    //sjekker kolisjon shit
    if (playerPosition.x < roadGrid.x) {
    playerPosition.x = roadGrid.x;

    } else if (playerPosition.x > roadGrid.x + roadGrid.width) {
    playerPosition.x = roadGrid.x + roadGrid.width;
    }

    if (playerPosition.y < roadGrid.y) {
    playerPosition.y = roadGrid.y;

    } else if (playerPosition.y > roadGrid.y + roadGrid.height) {
    playerPosition.y = roadGrid.y + roadGrid.height;
    }
    });
}

//posisjon på bro CARS
setInterval(() => {
    carPosition.y += 1; // flytter bil 1px ned
    if (carPosition.y >= 500) { // resetter når den treffer bunnen
        carPosition.y = -200;
        carPosition.id = Math.floor(Math.random()*8)
        carPosition.type = Math.floor(Math.random()*2)
        greetingFlag = false
    }
    if (carPosition.type==1){
        carPosition.x=-18
    }
    else{
        carPosition.x=395
    }
}, 10);

//posisjon på PROPS
setInterval(() => {
    propPosition.y += 2; // flytter props 1px ned
    if (propPosition.y >= 500) { // resetter når de treffer bunnen
        propPosition.y = -200;
        propPosition.id = Math.floor(Math.random()*2)
        propPosition.type = Math.floor(Math.random()*2)
        propPosition.x = Math.floor(Math.random()*267)+50
    }
    collisionDetect();
}, 10);

function collisionDetect(){

    if (playerPosition.x < propPosition.x + propDict[props[propPosition.type][propPosition.id]].width &&
        playerPosition.x + 71 > propPosition.x &&
        playerPosition.y < propPosition.y + propDict[props[propPosition.type][propPosition.id]].height &&
        playerPosition.y + 103 > propPosition.y
        ) {
            // collision detected
            progressbar1 -=20;
            propPosition.x += 500
        } else {
            // ingen collision
        }
    }

    function win(){
        if (progressbar2 >= 100){
            clearInterval(renderFrames);
            textBox.innerHTML=/*HTML*/`
            <div id="win">Wallah, du er en ekte broder!</div>
          `;
        }
    }

function death(){
    if ((progressbar1 <= 0) || (progressbar2 <= 0)) {
        clearInterval(renderFrames);
        textBox.innerHTML=/*HTML*/`
        <div id="gameover">Du er en wankster, din taper! </div>
      `;
    }
}