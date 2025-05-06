class Player extends Sprite  {
  constructor ({
    collisionBlocks = [],
    imageSrc,
    frameRate,
    animations,
    loop,
    lastDirection
  }) {
    super({imageSrc, frameRate, animations,loop, lastDirection})
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
    //vertikalne kolizie (gravitacia)
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
}
