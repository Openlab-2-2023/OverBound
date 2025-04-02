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
const kolagen = new Kolagen()
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

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });

  player.velocity.x = 0;
  
 //movement (A , D , kolagenbar charge)
  if (keys.d.pressed) {
    player.velocity.x = 5;
  } else if (keys.a.pressed) {
    player.velocity.x = -5;
  } else if (keys.p.pressed) {
    if (kolagen.kolagenbar > -70) {
      kolagen.kolagenbar = kolagen.kolagenbar - 1;
    }
  }
  kolagen.draw()
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

       //velky jump
      if(keys.s.pressed && player.velocity.y == 0 && kolagen.kolagenbar <= -28) {
        player.velocity.y = -25;
        kolagen.kolagenbar = kolagen.kolagenbar + 28;
      }
      //maly jump
      if(player.velocity.y == 0 && kolagen.kolagenbar <= -14) {
        player.velocity.y = -17;
        kolagen.kolagenbar = kolagen.kolagenbar + 14;
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
