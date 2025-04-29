class Sprite {
  constructor ({position,frameRate = 1, imageSrc}) {
    this.position = position
    this.image = new Image()
    this.image.onload = () => {
      this.loaded = true
      this.width = this.image.width / this.frameRate
      this.height = this.image.height
    }
    this.image.src = imageSrc
    this.loaded = false
    this.frameRate = frameRate
    this.currentFrame = 0
    this.elapsedFrames = 0
    this.frameBuffer = 14
  }

  draw() {
    if(!this.loaded) return
    const cropbox = {
      position: {
        x: this.width * this.currentFrame,
        y:0
      },
      width: this.width,
      height: this.height

    }
    c.drawImage(this.image,
      cropbox.position.x,
      cropbox.position.y,
      cropbox.width,
      cropbox.height,
      this.position.x,
      this.position.y,
      this.width,
      this.height
)

    this.updateFramerate()
  }

  updateFramerate() {
    this.elapsedFrames++

    if(this.elapsedFrames % this.frameBuffer === 0) {
      if(this.currentFrame < this.frameRate - 1) {
        this.currentFrame++
      } else {
        this.currentFrame = 0
      }
    }
    
  }
}
class Player extends Sprite  {
  constructor ({
    collisionBlocks = [],
    imageSrc,
    frameRate
  }) {
    super({imageSrc, frameRate})
    //spawnovacia pozicia
    this.position = {
      x:100,
      y:100
    }
//velkost hraca
    

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
    c.fillStyle = "rgba(255,255,255,0.5)"
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
    this.position.x += this.velocity.x
    this.checkForHorizontalCollisions()
    this.applyGravity()
    this.checkForVerticalCollisions()
  }

  checkForHorizontalCollisions() {
    //horizontalne kolizie
    for(let i = 0; i < this.collisionBlocks.length; i++) {
      const collisionBlock = this.collisionBlocks[i]

      if(this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if(this.velocity.x < 0) {
          this.position.x = collisionBlock.position.x + collisionBlock.width + 0.01
          break
        }

        if(this.velocity.x > 0) {
          this.position.x = collisionBlock.position.x - this.width - 0.01
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

      if(this.position.x <= collisionBlock.position.x + collisionBlock.width &&
        this.position.x + this.width >= collisionBlock.position.x &&
        this.position.y + this.height >= collisionBlock.position.y &&
        this.position.y <= collisionBlock.position.y + collisionBlock.height
      ) {
        if(this.velocity.y < 0) {
          this.velocity.y = 0
          this.position.y = collisionBlock.position.y + collisionBlock.height + 0.01
          break
        }

        if(this.velocity.y > 0) {
          this.velocity.y = 0
          this.position.y = collisionBlock.position.y - this.height - 0.01
          break
        }
      }
    }
  }
}
