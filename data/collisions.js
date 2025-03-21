const level1Collisions = [1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 1330, 1330, 1330, 1330,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 1330, 1330, 1330, 0, 1330, 0, 0, 0, 0,
            1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            1330, 0, 0, 0, 0, 0, 0, 0, 1330, 1330, 1330, 1330, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            1330, 1330, 1330, 1330, 1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 1330, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 1330, 0, 0, 0, 0, 0, 0, 1330, 1330, 1330, 1330, 0, 0, 0, 0, 0, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 0, 0, 1330, 1330, 1330, 1330, 1330, 1330, 1330, 0, 0, 0, 0,
            0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]



class CollisionBlock {
  constructor( {position} ) {
    this.position = position
    this.width = 64,
    this.height = 64  
  }

  draw() {
    c.fillStyle = 'red'
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }
}

Array.prototype.Parse2D = function() {
  let rows = []
  for(let i = 0; i < this.length; i+= 25 ) {
    rows.push(this.slice(i, i + 25))
    
  }
  return rows
}

const collisionBlocks = []
const parsedCollisions = level1Collisions.Parse2D()

let scaleMultiplier = 50 / 92

parsedCollisions.forEach((row, y) => {
    row.forEach((symbol, x) => {
      if(symbol === 1330) {
        collisionBlocks.push(
          new CollisionBlock({
            position: {
              x: x * (92 * scaleMultiplier),
              y: y * (92* scaleMultiplier)
            }
        }))
      }
    })
})