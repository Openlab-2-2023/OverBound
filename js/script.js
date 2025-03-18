const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const player = new Player
let keys = {
  d: {
    pressed: false
  },
  a: {
    pressed: false
  }
}
function animate() {
  window.requestAnimationFrame(animate); 
  c.fillStyle = "white";
  c.fillRect(0, 0, canvas.width, canvas.height)

  player.velocity.x = 0

  if(keys.d.pressed) {
    player.velocity.x = 8
  } else if (keys.a.pressed) {
    player.velocity.x = -8
  }

  player.draw()
  player.update();
}
animate();

window.addEventListener("keydown", (event) => {
  switch(event.code) {
    case "KeyD": 
      // move right (D)
      keys.d.pressed = true
      break;
    case "KeyA":
      //move left (A)
      keys.a.pressed = true
      break;
    case "Space": case "KeyW":
      if(player.velocity.y === 0)
      player.velocity.y = -13 // jump (spacebar or W)
  }
})

window.addEventListener("keyup", (event) => {
  switch(event.code) {
    case "KeyD": 
      keys.d.pressed = false
      break;
    case "KeyA":
      keys.a.pressed = false
      break;
    
  }
})
