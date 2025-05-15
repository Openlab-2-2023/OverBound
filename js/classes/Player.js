class Player extends Sprite  {
  constructor ({
    collisionBlocks = [],
    imageSrc,
    frameRate,
    animations,
    loop,
    lastDirection,
    levelSpawnPosition
  }) {
    super({imageSrc, frameRate, animations,loop, lastDirection,levelSpawnPosition
})
    //spawnovacia pozicia
    this.position = {
      x:100,
      y:100
    }

    this.sides = {
      bottom: this.position.y + this.height
    }

    this.velocity = {
      x:0,
      y:0
    }

    this.gravity = 1

    this.collisionBlocks = collisionBlocks
    this.canDash = true

    this.lastDashTime = 0
    this.dashCooldown = 1000
  }
  

  update() {
    //c.fillStyle = "rgba(255,0,0,0.0)"
    //c.fillRect(this.position.x, this.position.y, this.width, this.height)

    this.position.x += this.velocity.x
    this.updateHitBox()
    this.checkForHorizontalCollisions()
    this.applyGravity()
    this.updateHitBox()
    this.checkForVerticalCollisions()
  }

  switchSprite(name) {
    if(this.image === this.animations[name].image) return
    this.currentFrame = 0
    this.image = this.animations[name].image
    this.frameRate = this.animations[name].frameRate
    this.frameBuffer = this.animations[name].frameBuffer
    this.loop = this.animations[name].loop
    this.currentAnimation = this.animations[name]
  }

  updateHitBox() {
    this.hitbox = {
      position: {
        x: this.position.x + 11,
        y: this.position.y + 10
      },
      width: 35,
      height: 50
    }
  }

  checkForHorizontalCollisions() {
    //horizontalne kolizie
    for(let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
        this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if(this.velocity.x < 0) {
          const offset = this.hitbox.position.x - this.position.x
          this.position.x = collisionBlock.position.x + collisionBlock.width - offset + 0.01
          break
        }

        if(this.velocity.x > 0) {
          const offset = this.hitbox.position.x - this.position.x + this.hitbox.width
          this.position.x = collisionBlock.position.x - offset - 0.01
          break
        }
      }
    }
  }

  applyGravity() {
    this.velocity.y += this.gravity
    this.position.y += this.velocity.y
  }



  checkForVerticalCollisions() {
    //vertikalne kolizie
    for(let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      if(this.hitbox.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.hitbox.position.x + this.hitbox.width >= collisionBlock.position.x &&
        this.hitbox.position.y + this.hitbox.height >= collisionBlock.position.y &&
        this.hitbox.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if(this.velocity.y < 0) {
          this.velocity.y = 0
          const offset = this.hitbox.position.y - this.position.y
          this.position.y = collisionBlock.position.y + collisionBlock.height - offset + 0.01
          break
        }

        if(this.velocity.y > 0) {
          this.velocity.y = 0
          const offset = this.hitbox.position.y - this.position.y + this.hitbox.height
          this.position.y = collisionBlock.position.y - offset - 0.01
          break
        }
      }
    }
  }

playerMovement(keys) {
  if (!keys.s.pressed) {
    if(currentDifficulty === 'normal') {
      if (keys.d.pressed) {
      this.movePlayer(5.5, 'runRight', 'right');
      if(keys.o.pressed) {
        this.dash()
          if(!player.velocity.x == 0) {
          //player.switchSprite('charge')
        }
      }
    } else if (keys.a.pressed) {
      this.movePlayer(-5.5, 'runLeft', 'left');
      if(keys.o.pressed) {
        this.dash()
        if(!player.velocity.x == 0) {
        //player.switchSprite('charge')
        }
      }
    } else if (keys.p.pressed && !keys.d.pressed && !keys.a.pressed) {
      this.chargePlayer();
    }  else if(keys.o.pressed) {
      this.dash()
    } 
    } else {
      if (keys.d.pressed) {
      this.movePlayer(4.5, 'runRight', 'right');
    } else if (keys.a.pressed) {
      this.movePlayer(-4.5, 'runLeft', 'left');
    } else if (keys.p.pressed && !keys.d.pressed && !keys.a.pressed) {
      this.chargePlayer();
    } 
    }
  } else if(keys.s.pressed) {
    this.crouchPlayer();
    if(keys.o.pressed) {
      player.dash()
      player.switchSprite(player.lastDirection === 'right' ? 'idleRight' : 'idleLeft')
    }
  } 

  
}

movePlayer(velocity, sprite, direction) {
  player.velocity.x = velocity;
  player.switchSprite(sprite);
  player.lastDirection = direction;
}
/*
chargePlayer() {
  if (kolagen.kolagenbar > -70) {
    kolagen.kolagenbar--;
    player.switchSprite(player.lastDirection === 'right' ? 'charge' : 'chargeLeft');
  } else {
    player.switchSprite(player.lastDirection === 'right' ? 'idleRight' : 'idleLeft');
  }
}
*/
crouchPlayer() {
  player.switchSprite(player.lastDirection === 'right' ? 'crouch' : 'crouchLeft');
}


dash() {
  player.velocity.x = player.lastDirection === 'right' ? 18 : -18
  setTimeout(() => {
    player.velocity.x = 0;
    keys.o.pressed = false;
    
  }, 100);
}

detectRisk() {
    for(let i = 0; i < risks.length; i++) {
      const risk = risks[i]
      if(player.hitbox.position.x <= risk.position.x + risk.width &&
        player.hitbox.position.x + player.hitbox.width >= risk.position.x &&
        player.hitbox.position.y + player.hitbox.height >= risk.position.y &&
        player.hitbox.position.y <= risk.position.y + risk.height) {
          player.position.x = player.levelSpawnPosition.x
          player.position.y = player.levelSpawnPosition.y
        }
  }
}
}
