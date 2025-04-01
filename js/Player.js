class Player {
  constructor ({
    collisionBlocks = []
  }) {
    
    this.position = {
      x:100,
      y:100
    }

    this.width = 30
    this.height = 40

    this.sides = {
      bottom: this.position.y + this.height
    }

    this.velocity = {
      x:0,
      y:0
    }

    this.gravity = 1

    this.collisionBlocks = collisionBlocks
    console.log(this.collisionBlocks)

  }
  // kreslenie charaktera pri requestAnimationFrame()
  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  
  update() {
    this.position.x += this.velocity.x


    //horizontalne
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
    this.velocity.y += this.gravity
    this.position.y += this.velocity.y
    this.sides.bottom = this.position.y + this.height;




    //vertikalne (gravitacia)
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

class Sprite {
  constructor ({position, scale, imageSrc}) {
    this.position = position
    this.scale = scale
    this.image = new Image()
    this.image.src = imageSrc
  }

  draw() {
    c.drawImage(this.image, this.position.x, this.position.y, this.scale.width, this.scale.height )
    
  }
}

class CollisionBlock {
  constructor( {position} ) {
    this.position = position
    this.width = 32,
    this.height = 32  
  }

  draw() {
    c.fillStyle = 'rgba(255,0,0,0.0'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}