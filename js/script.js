const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

// musi byt 16:9 
// 1920:1080 sa nezmesti :(
canvas.width = 1536; 
canvas.height = 864;


const player = new Player
const background = new Sprite({
  position: {
    x: 0,
    y:0,
  },

  scale: {
    width: canvas.width,
    height: canvas.height
  },

  imageSrc: "./sprites/background1.png"
})


let keys = {
  d: {
    pressed: false
  },
  a: {
    pressed: false
  },
}

function animate() {
  window.requestAnimationFrame(animate); 
  background.draw()

  player.velocity.x = 0

  if(keys.d.pressed) {
    player.velocity.x = 5
  } else if (keys.a.pressed) {
    player.velocity.x = -5  
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
      player.velocity.y = -17 // jump (spacebar or W)
      break;
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
