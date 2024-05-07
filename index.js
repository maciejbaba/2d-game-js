console.log("test");

const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.height = 720;
canvas.width = 1280;
context.fillRect(0, 0, canvas.width, canvas.height);

const GRAVITY = 1;

class Sprite {
  constructor({ position, color, velocity }) {
    this.position = position;
    this.width = 50;
    this.height = 100;
    this.color = color;
  }
  draw() {
    context.fillStyle = this.color;
    context.fillRect(this.position.x, this.position.y, this.width, this.height);
  }
}

const player = new Sprite({
  position: {
    x: 0,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "green",
});

const enemy = new Sprite({
  position: {
    x: 200,
    y: 0,
  },
  velocity: {
    x: 0,
    y: 0,
  },
  color: "red",
});

function game() {
  context.fillStyle = "black";
  context.fillRect(0, 0, canvas.width, canvas.height);
  player.position.y += GRAVITY;
  enemy.position.y += GRAVITY;
  if (player.position.y >= canvas.height - player.height) {
    player.position.y = canvas.height - player.height;
  }
  if (enemy.position.y >= canvas.height - player.height) {
    enemy.position.y = canvas.height - player.height;
  }
  player.draw();
  enemy.draw();
  console.log("works");
}

setInterval(game, 10);
