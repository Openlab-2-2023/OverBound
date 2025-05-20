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
let animals
let risks
let clouds
const overlay = {
  opacity: 0
}
const kolagen = new Kolagen()
let level = 1
let levels = {
  1: { //odtialto kopiruj
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },

      //obrazok levelu
      imageSrc: './sprites/levels/level1.png',//position sa meni + cesta

      });
      
      parsedCollisions = level1Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 160
      player.position.y = 350 //position sa meni
      portals = [
        new Sprite ({
          position: {
            x:920,
            y:80
          },
          imageSrc: './sprites/other/portal.png',//position sa meni + cesta
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]
      animals = [
        new Sprite ({
          position: {
            x:0,
            y:0
          },
          imageSrc: '',
          frameRate: 4,
          frameBuffer: 8,
          loop:true
        })
      ]

      risks = [
        new Sprite ({
          position: {
            x:700,
            y:400
          },
          imageSrc: '',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]
      clouds = [
        new Sprite ({
          position: {
            x:500,
            y:300
          },
          imageSrc: '',
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
      player.levelSpawnPosition = {
        x:50,
        y:350
      }
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
      animals = [
        new Sprite ({
          position: {
            x:0,
            y:0
          },
          imageSrc: '',
          frameRate: 4,
          frameBuffer: 8,
          loop:true
        })
      ]

      risks = [
        new Sprite ({
          position: {
            x:600,
            y:445
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 27,
          frameBuffer: 3,
          loop:true
        }),

        new Sprite ({
          position: {
            x:150,
            y:445
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 27,
          frameBuffer: 3,
          loop:true,
        })
      ]

      clouds = [
        new Sprite ({
          position: {
            x:500,
            y:300
          },
          imageSrc: '',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]
      
    }
  },
3: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
      
        
      //obrazok levelu
        imageSrc: "./sprites/levels/level3.png",
      });
      
      parsedCollisions = level3Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 100
      player.position.y = 350
      portals = [
        new Sprite ({
          position: {
            x:70,
            y:50
          },
          imageSrc: './sprites/other/portal.png',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]
      animals = [
        new Sprite ({
          position: {
            x:0,
            y:0
          },
          imageSrc: '',
          frameRate: 4,
          frameBuffer: 8,
          loop:true
        })
      ]

      risks = [
        new Sprite ({
          position: {
            x:700,
            y:400
          },
          imageSrc: '',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]

      clouds = [
        new Sprite ({
          position: {
            x:450,
            y:300
          },
          imageSrc: '',
          frameRate: 5,
          frameBuffer: 13,
          loop:true,
        })
      ]
    }
  },
  4: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
      
        
      //obrazok levelu
        imageSrc: "./sprites/levels/level4.png",
      });
      
      parsedCollisions = level4Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 50
      player.position.y = 350
      portals = [
        new Sprite ({
          position: {
            x:920,
            y:45
          },
          imageSrc: './sprites/other/portal.png',
          frameRate: 6,
          frameBuffer: 8,
          loop:true

          
        })
      ]

      animals = [
        new Sprite ({
          position: {
            x:500,
            y:324
          },
          imageSrc: './sprites/bird/idle.png',
          frameRate: 4,
          frameBuffer: 12,
          loop:true
        })
      ]

      risks = [
        new Sprite ({
          position: {
            x:700,
            y:400
          },
          imageSrc: '',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]

      clouds = [
        new Sprite ({
          position: {
            x:500,
            y:300
          },
          imageSrc: '',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]
    }
  },
    5: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
      
        
      //obrazok levelu
        imageSrc: "./sprites/levels/level5.png",
      });
      
      parsedCollisions = level5Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 50
      player.position.y = 350
      portals = [
        new Sprite ({
          position: {
            x:950,
            y:175
          },
          imageSrc: './sprites/other/portal.png',
          frameRate: 6,
          frameBuffer: 8,
          loop:true

          
        })
      ]

      animals = [
        new Sprite ({
          position: {
            x:500,
            y:324
          },
          imageSrc: '',
          frameRate: 4,
          frameBuffer: 12,
          loop:true
        })
      ]

      risks = [
        new Sprite ({
          position: {
            x:700,
            y:400
          },
          imageSrc: '',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]

      clouds = [
        new Sprite ({
          position: {
            x:200,
            y:280
          },
          imageSrc: './sprites/other/clouds.png',
          frameRate: 5,
          frameBuffer: 13,
          loop:true
        }),

        new Sprite ({
          position: {
            x:825,
            y:320
          },
          imageSrc: './sprites/other/clouds.png',
          frameRate: 5,
          frameBuffer: 13,
          loop:true
        })
      ]
    }
  },
  6: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
      
        
      //obrazok levelu
        imageSrc: "./sprites/levels/level6.png",
      });
      
      parsedCollisions = level6Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 40
      player.position.y = 450
      portals = [
        new Sprite ({
          position: {
            x:950,
            y:180
          },
          imageSrc: './sprites/other/portal.png',
          frameRate: 6,
          frameBuffer: 8,
          loop:true

          
        })
      ]

      animals = [
        new Sprite ({
          position: {
            x:500,
            y:324
          },
          imageSrc: '',
          frameRate: 4,
          frameBuffer: 12,
          loop:true
        })
      ]

      risks = [
        new Sprite ({
          position: {
            x:700,
            y:400
          },
          imageSrc: '',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]

      clouds = [
        new Sprite ({
          position: {
            x:500,
            y:300
          },
          imageSrc: '',
          frameRate: 6,
          frameBuffer: 8,
          loop:true
        })
      ]
    }
  },
  7: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
      
        
      //obrazok levelu
        imageSrc: "./sprites/levels/level9.png",
      });
      
      parsedCollisions = level9Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 50
      player.position.y = 350
      player.levelSpawnPosition = {
        x:50,
        y:350
      }
      
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

      animals = [
        new Sprite ({
          position: {
            x:500,
            y:324
          },
          imageSrc: '',
          frameRate: 4,
          frameBuffer: 12,
          loop:true
        })
      ]

      risks = [
        new Sprite ({
          position: {
            x:160,
            y:550
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 0,
          frameBuffer: 3,
          loop:false
        }),

        new Sprite ({
          position: {
            x:430,
            y:550
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 0,
          frameBuffer: 3,
          loop:false
        }),

        new Sprite ({
          position: {
            x:700,
            y:550
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 0,
          frameBuffer: 3,
          loop:false
        }),
      ]

      clouds = [
        new Sprite ({
          position: {
            x:420,
            y:450
          },
          imageSrc: './sprites/other/clouds.png',
          frameRate: 5,
          frameBuffer: 13,
          loop:true
        }),

        new Sprite ({
          position: {
            x:700,
            y:300
          },
          imageSrc: './sprites/other/clouds.png',
          frameRate: 5,
          frameBuffer: 13,
          loop:true
        }),
        
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

    dash: {
      frameRate: 1,
      frameBuffer: 1,
      loop: true,
      imageSrc: './sprites/character/dash.png'
    },

    dashLeft: {
      frameRate: 1,
      frameBuffer: 1,
      loop: true,
      imageSrc: './sprites/character/dashleft.png'
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
      frameBuffer: 1,
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

  animals.forEach((animal) => {
    animal.draw();
  });
  risks.forEach((risk) => {
    risk.draw();
  });

  clouds.forEach((cloud) => {
    cloud.draw();
  });
  

  player.velocity.x = 0;

  player.playerMovement(keys)
  kolagen.draw()
  kolagen.refill()
  player.draw();
  player.update();
  player.detectCloud()
  player.detectRisk()
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
      /*
    case "KeyP":
      //charge kolagenbar
      keys.p.pressed = true;
        
      break;
      */
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


      
  }
})

window.addEventListener('keydown', (event) => {
  if (event.repeat) return;
  switch(event.code) {
    case "KeyO":
      if(kolagen.kolagenbar <= -28) {
        keys.o.pressed = true
        kolagen.kolagenbar = kolagen.kolagenbar + 28;
      }
      break;
  }
});
