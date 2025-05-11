const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// musi byt 16:9
// fullscreen sa neda :(
canvas.width = 1024;
canvas.height = 596;

let currentDifficulty = 'normal';
document.querySelector('.difficulty').addEventListener('click', (event) => {
    if (event.target.tagName === 'B') {
        currentDifficulty = event.target.textContent;
        console.log(`Selected difficulty: ${event.target.textContent}`);
        
    }
});

let background
let parsedCollisions
let collisionBlocks
let portals
const overlay = {
  opacity: 0
}
const kolagen = new Kolagen()
let level = 1
let levels = {
  1: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },

      //obrazok levelu
        imageSrc: "./sprites/levels/level1.png",
      });
      
      parsedCollisions = level1Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 200
      player.position.y = 350
      portals = [
        new Sprite ({
          position: {
            x:920,
            y:80
          },
          imageSrc: './sprites/other/portal.png',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]
    }
  },

  2: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
      
        
      //obrazok levelu
        imageSrc: "./sprites/levels/level2.png",
      });
      
      parsedCollisions = level2Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 50
      player.position.y = 350
      portals = [
        new Sprite ({
          position: {
            x:930,
            y:110
          },
          imageSrc: './sprites/other/portal.png',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]
    }
  },

}



const player = new Player({
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
    perish: {
      frameRate: 3,
      frameBuffer: 10,
      loop: false,
      imageSrc: './sprites/character/perish.png',
      onComplete: () => {
        gsap.to(overlay, {
          opacity: 1,
          onComplete: () => {
            level++
            levels[level].init()
            gsap.to(overlay, {
              opacity: 0
            })
            player.switchSprite('idleRight')
          }
        })
      }
    },
  }
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
    pressed: false,
  },
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
  
  player.playerMovement(keys)
  kolagen.draw()
  player.draw();
  player.update();
  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = 'black'
  c.fillRect(0,0,canvas.width, canvas.height)
  c.restore()
}
levels[level].init()
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
        if(currentDifficulty === 'normal') {
          player.velocity.y = -22;
          kolagen.kolagenbar = kolagen.kolagenbar + 28;
        } else {
          player.velocity.y = -20;
          kolagen.kolagenbar = kolagen.kolagenbar + 28;
        }
        
        keys.s.pressed = false
      }
      //maly jump
      if(player.velocity.y == 0 && kolagen.kolagenbar <= -14) {
        if(currentDifficulty === 'normal') {
          player.velocity.y = -17;
          kolagen.kolagenbar = kolagen.kolagenbar + 14;
        } else {
          player.velocity.y = -17;
          kolagen.kolagenbar = kolagen.kolagenbar + 14;
        }
        
      }

      break;

      case "KeyE":

    for(let i = 0; i < portals.length; i++) {
      const portal = portals[i]
      if(player.hitbox.position.x <= portal.position.x + portal.width &&
        player.hitbox.position.x + player.hitbox.width >= portal.position.x &&
        player.hitbox.position.y + player.hitbox.height >= portal.position.y &&
        player.hitbox.position.y <= portal.position.y + portal.height) {
          player.switchSprite('perish')
        } 
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

    case "KeyO":
      keys.o.pressed = true
      break;
      
  }
});
