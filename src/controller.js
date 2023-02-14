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
    
    renderGame();
    debugWindow();
    });
    }