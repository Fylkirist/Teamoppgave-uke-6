//dette gjør at du kan styre bilen med piltastene/wasd
characterController()
function characterController() {

    document.addEventListener("keydown", (event) => {
        if (event.key === "ArrowDown" || event.key === "s") {
            playerPosition.y += 50;
            renderGame()

        } if (event.key === "ArrowUp" || event.key === "w") {
            playerPosition.y -= 50;
            renderGame()

        } if (event.key === "ArrowLeft" || event.key === "a") {
            playerPosition.x -= 50;
            renderGame()

        } if (event.key === "ArrowRight" || event.key === "d") {
            playerPosition.x += 50;
            renderGame()
        }
    });
}
