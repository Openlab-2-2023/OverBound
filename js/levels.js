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
      player.position.x = 150
      player.position.y = 250//position sa meni
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
            y:230
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
      player.levelSpawnPosition = {
        x:50,
        y:350
      }
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
            x:300,
            y:450
          },
          imageSrc: "./sprites/other/sandworm.png",
          frameRate: 27,
          frameBuffer: 3,
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
        imageSrc: "./sprites/levels/level7.png",
      });
      
      parsedCollisions = level7Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 50
      player.position.y = 100
      player.levelSpawnPosition = {
        x:50,
        y:50
      }
      portals = [
        new Sprite ({
          position: {
            x:950,
            y:60
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
            x:380,
            y:592
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 27,
          frameBuffer: 3,
          loop:true
        }),
        new Sprite ({
          position: {
            x:130,
            y:592
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 27,
          frameBuffer: 3,
          loop:true
          
        }),
        new Sprite ({
          position: {
            x:630,
            y:592
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 27,
          frameBuffer: 3,
          loop:true
        })
      ]

      clouds = [
        new Sprite ({
          position: {
            x:200,
            y:280
          },
          imageSrc: '',
          frameRate: 5,
          frameBuffer: 13,
          loop:true
        }),

        
      ]
    }
  },
  8: {
    init: () => {
      background = new Sprite({
        position: {
          x: 0,
          y: 0,
        },
      
        
      //obrazok levelu
        imageSrc: "./sprites/levels/level8.png",
      });
      
      parsedCollisions = level8Collisions.Parse2D();
      collisionBlocks = parsedCollisions.createObjectsFrom2D(); 
      player.collisionBlocks = collisionBlocks
      player.position.x = 50
      player.position.y = 350
      player.levelSpawnPosition = {
        x:100,
        y:200
      }
      portals = [
        new Sprite ({
          position: {
            x:950,
            y:60
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
            x:380,
            y:420
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 27,
          frameBuffer: 3,
          loop:true
        }),
        new Sprite ({
          position: {
            x:170,
            y:420
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 27,
          frameBuffer: 3,
          loop:true
          
        }),
        new Sprite ({
          position: {
            x:750,
            y:420
          },
          imageSrc: './sprites/other/sandworm.png',
          frameRate: 27,
          frameBuffer: 3,
          loop:true
        })
      ]

      clouds = [
        new Sprite ({
          position: {
            x:200,
            y:280
          },
          imageSrc: '',
          frameRate: 5,
          frameBuffer: 13,
          loop:true
        }),

        
      ]
    }
  },
  9: {
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

  10: {
    init: () => {
      window.location.href = 'endscreen.html'
  },
}

}