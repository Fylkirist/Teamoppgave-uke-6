//use this to see what room your in to debug
debugWindow() //turn this on or off to view debug window
function debugWindow() {
    appDebug.innerHTML = /*html*/`
    Current showing character sprite is ____.<br>
    Character postion is ${playerPosition.x}x,${playerPosition.y}y.<br><br>
    Current side car type is ${carPosition.type}. <br>
    Current side car position is ${carPosition.x}x,${carPosition.y}y.<br>
    ID for this car is ${cars[carPosition.type][carPosition.id]}.<br><br>


    <p style="font-size: 12px; color:#569459;">This window is intended for debugging
    <br>and is not a part of the final product.</p>
    `;
}