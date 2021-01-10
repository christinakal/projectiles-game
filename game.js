import Player from "./Player.js";
import Projectile from "./Projectile.js";

const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const player = new Player(100, 100, 30, "#216F9C");

console.log("It's working!!!");
// resize the canvas to fill browser window dynamically
window.addEventListener("resize", resizeCanvas, false);
window.addEventListener("click", () => {
  console.log("clicked!");
})

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
