import Player from "./Player.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const player = new Player(100, 100, 30, "#216F9C");

console.log(player);
// resize the canvas to fill browser window dynamically
window.addEventListener("resize", resizeCanvas, false);

// === functions

function resizeCanvas() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;

  // draw the player
  player.draw(ctx);
}

// === call functions
resizeCanvas();

export default { ctx };
