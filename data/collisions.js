const level1Collisions = [3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 3480, 3480, 3480, 3480,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 3480, 3480, 3480, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 3480, 3480, 3480, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 3480, 3480, 3480, 0, 0, 0, 0, 0, 3480, 3480, 3480, 3480, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 3480, 3480, 3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  3480, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 3480, 3480, 3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  3480, 3480, 3480, 3480, 3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  0, 0, 0, 0, 3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  0, 0, 0, 0, 3480, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 3480, 3480, 3480, 3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  0, 0, 0, 0, 3480, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 3480, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3480, 0, 0, 0, 0,
  0, 0, 0, 0, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 0, 0, 0, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 3480, 0, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



class CollisionBlock {
  constructor( {position} ) {
    this.position = position
    this.width = 32,
    this.height = 32  
  }

  draw() {
    c.fillStyle = 'rgba(255,0,0,0.5'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

Array.prototype.Parse2D = function() {
  let rows = []
  for(let i = 0; i < this.length; i+= 32 ) {
    rows.push(this.slice(i, i + 32))
    
  }
  return rows
}

const collisionBlocks = []
const parsedCollisions = level1Collisions.Parse2D()

parsedCollisions.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if(symbol === 3480) {
        collisionBlocks.push(
          new CollisionBlock({
            position: {
              x: x * 32,
              y: y * 33
            }
        }))
      }
    })
})