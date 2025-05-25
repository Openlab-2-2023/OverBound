const canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
const t = canvas.getContext("2d");


// musi byt 16:9
// fullscreen sa neda :(
canvas.width = 1024;
canvas.height = 596;



function animate() {
  window.requestAnimationFrame(animate);
  background.draw();
  collisionBlocks.forEach((CollisionBlock) => {
    CollisionBlock.draw();
  });
  
  portals.forEach((portal) => {
    portal.draw();
  });

  animals.forEach((animal) => {
    animal.draw();
  });
  risks.forEach((risk) => {
    risk.draw();
  });

  clouds.forEach((cloud) => {
    cloud.draw();
  });
  
  
  player.velocity.x = 0;
  player.playerMovement()
  kolagen.draw()
  kolagen.refill()
  player.draw();
  player.update();
  player.detectCloud()
  player.detectRisk()
  player.textAppear()
  c.save()
  c.globalAlpha = overlay.opacity
  c.fillStyle = 'black'
  c.fillRect(0,0,canvas.width, canvas.height)
  c.restore()
}
levels[level].init()
animate();


