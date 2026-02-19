let ramBlocks = [100, 150, 120]; // dimensioni dei blocchi di RAM in MB
let allocated = [false, false, false]; // stato allocazione dei blocchi

function setup() {
  createCanvas(300, 400);
  noStroke();
}

function draw() {
  background(255);//bianco
  let y = 50; // punto di partenza verticale
  let x = 50; // margine orizzontale
  let blockHeight = 80; // altezza dei blocchi

  // Disegna i blocchi di RAM
  for (let i = 0; i < ramBlocks.length; i++) {
    if (allocated[i]) {
      fill(100, 200, 100); // verde per allocato
    } else {
      fill(200, 200, 200); // grigio per libero
    }
    rect(x, y, 200, blockHeight);
    y += blockHeight + 5; // distanza tra blocchi
  }
}

