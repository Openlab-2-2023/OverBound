class Player {
  constructor () {
    this.position = {
      x:100,
      y:100
    }

    this.width = 50
    this.height = 50

    this.sides = {
      // treba aj ostatne dopisat
      bottom: this.position.y + this.height
    }

    this.velocity = {
      x:0,
      y:0
    }

    this.gravity = 1

  }
  // kreslenie charaktera pri requestAnimationFrame()
  draw() {
    c.fillStyle = 'red';
    c.fillRect(this.position.x, this.position.y, this.width, this.height);
  }

  1
  update() {
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    this.sides.bottom = this.position.y + this.height;
    if(this.sides.bottom + this.velocity.y < canvas.height) {
      this.velocity.y += this.gravity
      
    } else this.velocity.y = 0
  }
}