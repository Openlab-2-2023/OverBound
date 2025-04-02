const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// musi byt 16:9
// fullscreen sa neda :(
canvas.width = 1024;
canvas.height = 596;

const parsedCollisions = level1Collisions.Parse2D();
const collisionBlocks = parsedCollisions.createObjectsFrom2D();

const player = new Player({
  collisionBlocks,
});
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },

  scale: {
    width: canvas.width,
    height: canvas.height,
  },

  imageSrc: "./sprites/level1.png",
});

let keys = {
  d: {
    pressed: false,
  },
  a: {
    pressed: false,
  },
  p: {
    pressed: false,
  },
  s: {
    pressed: false,
  },
  w: {
    pressed: false,
  },
};

let kolagenbar = -70;

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });

  player.velocity.x = 0;

  c.fillStyle = "gray";
  c.fillRect(50, 50, 10, 70);
  const grad = c.createLinearGradient(2, 0, 36, 100);
  grad.addColorStop(0.5, "#ff8d00");
  grad.addColorStop(1, "#020024");
  c.fillStyle = grad;
  c.fillRect(50, 120, 10, kolagenbar); //farba kolagenbaru + vyska & sirka

  if (keys.d.pressed) {
    player.velocity.x = 5;
  } else if (keys.a.pressed) {
    player.velocity.x = -5;
  } else if (keys.p.pressed) {
    if (kolagenbar > -70) {
      kolagenbar = kolagenbar - 1; //movement (A , D , kolagenbar charge)
    }
  }

  player.draw();
  player.update();
}
animate();

window.addEventListener("keydown", (event) => {
  switch (event.code) {
    case "KeyD":
      // move right (D)
      keys.d.pressed = true;
      break;
    case "KeyA":
      //move left (A)
      keys.a.pressed = true;

      break;
    case "KeyS":
      //duckujes
      keys.s.pressed = true;
      break;
    case "KeyP":
      //charge kolagenbar
      keys.p.pressed = true;
      break;
    case "Space":
    case "KeyW":
      if (keys.s.pressed) {
        if (player.velocity.y == 0) {
          if (kolagenbar <= -28) {
            player.velocity.y = -25;
            kolagenbar = kolagenbar + 28; //velky jump
          }
        }
      }
      if (player.velocity.y == 0) {
        if (kolagenbar <= -14) {
          player.velocity.y = -17;
          kolagenbar = kolagenbar + 14; //maly jump
        }
      }
      break;
  }
});

window.addEventListener("keyup", (event) => {
  switch (event.code) {
    case "KeyD":
      keys.d.pressed = false;
      break;
    case "KeyA":
      keys.a.pressed = false;
      break;
    case "KeyP":
      keys.p.pressed = false;
      break;
    case "KeyS":
      keys.s.pressed = false;
      break;
    case "KeyW":
      keys.w.pressed = false;
      break;
  }
});
