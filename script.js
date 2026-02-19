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

  // blocchi RAM
  for (let i = 0; i < ramBlocks.length; i++) {
    if (allocated[i]) {
      fill(100, 200, 100); // verde per allocato
    } else {
      fill(200, 200, 200); // grigio per libero
    }
    rect(x, y, 200, blockHeight);
    
    // testo a lato con dimensione del blocco
    fill(0); //colore testo (nero)
    textAlign(LEFT, CENTER);
    text(ramBlocks[i] + " MB", x + 210, y + blockHeight / 2);

    y += blockHeight + 5; // distanza tra blocchi
  }
}

function alloca() {
  let size = int(select('#size').value());
  //verifica se input è troppo grande
  
  // First Fit: trova il primo blocco libero sufficientemente grande
  let allocato = false; // boolean per verificare se il processo è stato allocato
  for (let i = 0; i < ramBlocks.length; i++) {
    if (!allocated[i] && size <= ramBlocks[i] && !allocato) {
      allocated[i] = true;
      allocato = true; 
    }
  }

  // aggiornamento informazioni sopra
}

