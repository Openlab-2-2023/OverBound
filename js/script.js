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
  imageSrc: './sprites/character/idle.png',
  frameRate: 4,
  loop: true,
  animations: {
    idleRight: {
      frameRate: 4,
      frameBuffer: 14,
      loop: true,
      imageSrc: './sprites/character/idle.png'
    },

    idleLeft: {
      frameRate: 4,
      frameBuffer: 14,
      loop: true,
      imageSrc: './sprites/character/idleleft.png'
    },

    runRight: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './sprites/character/runright.png'

    },

    runLeft: {
      frameRate: 8,
      frameBuffer: 4,
      loop: true,
      imageSrc: './sprites/character/runleft.png'
    },

    crouch: {
      frameRate: 4,
      frameBuffer: 4,
      loop: false,
      imageSrc: './sprites/character/crouch.png'
    },
    crouchLeft: {
      frameRate: 4,
      frameBuffer: 4,
      loop: false,
      imageSrc: './sprites/character/crouchleft.png'
    },
    charge: {
      frameRate: 4,
      frameBuffer: 6,
      loop: true,
      imageSrc: './sprites/character/charge.png'
    },
    chargeLeft: {
      frameRate: 4,
      frameBuffer: 6,
      loop: true,
      imageSrc: './sprites/character/chargeleft.png'
    },
  }
});

const portals = [
  new Sprite ({
    position: {
      x:920,
      y:115
    },
    imageSrc: './sprites/other/portal.png',
    frameRate: 6,
    frameBuffer: 8,
    loop:true
  })
]

 
const kolagen = new Kolagen()
const background = new Sprite({
  position: {
    x: 0,
    y: 0,
  },

  
//obrazok levelu
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
  o: {
    pressed: false
  }
};

function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });

  portals.forEach((portal) => {
    portal.draw();
  });
  player.velocity.x = 0;
  
 //movement (A , D , kolagenbar charge)
 if(keys.s.pressed == false) {

  if (keys.d.pressed) {
    player.velocity.x = 5;
    if(!keys.s.pressed) {
      player.switchSprite('runRight')
      player.lastDirection = 'right'
      }
  } else if (keys.a.pressed) {
    player.velocity.x = -5;
    if(!keys.s.pressed) {
      player.switchSprite('runLeft')
      player.lastDirection = 'left'
    }
  } else if (keys.p.pressed && !keys.d.pressed && !keys.a.pressed) {
    if (kolagen.kolagenbar > -70) {
      kolagen.kolagenbar = kolagen.kolagenbar - 1;
      if(player.lastDirection === 'right') {
        player.switchSprite('charge')
      } else if(player.lastDirection === 'left') {
        player.switchSprite('chargeLeft')
      }
    } else {
      if(player.lastDirection === 'right') {
        player.switchSprite('idleRight')
      } else if(player.lastDirection === 'left') {
        player.switchSprite('idleLeft')
      }
    }
  } 
 } else {
  if(player.lastDirection === 'right') {
    player.switchSprite('crouch')
  } else if(player.lastDirection === 'left') {
    player.switchSprite('crouchLeft')
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
      
      if(keys.s.pressed && player.velocity.y == 0 && kolagen.kolagenbar <= -28) {
        player.velocity.y = -25;
        kolagen.kolagenbar = kolagen.kolagenbar + 28;
        keys.s.pressed = false
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
      player.switchSprite('idleRight')
      break;
    case "KeyA":
      keys.a.pressed = false;
      player.switchSprite('idleLeft')
      break;
    case "KeyP":
      keys.p.pressed = false;
      if(player.lastDirection === 'right') {
        player.switchSprite('idleRight')
      } else if(player.lastDirection === 'left') {
        player.switchSprite('idleLeft')
      }
      break;
    case "KeyS":
      keys.s.pressed = false;
      if(player.lastDirection === 'right') {
        player.switchSprite('idleRight')
      } else if(player.lastDirection === 'left') {
        player.switchSprite('idleLeft')
      }

    case "KeyW":
      keys.w.pressed = false;
      break;
      
  }
});
