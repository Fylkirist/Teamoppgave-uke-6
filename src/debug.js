

//use this to see what room your in to debug
debugWindow() //turn this on or off to view debug window
function debugWindow() {
    appDebug.innerHTML = /*html*/`
    The character postion is ${playerPosition.x}x,${playerPosition.y}y.<br>
    <p style="font-size: 12px; color:#569459;">This window is intended for debugging
    <br>and is not a part of the final product.</p>
    `;
}