let data;
let url = "https://docs.google.com/spreadsheets/d/e/2PACX-1vR2ll1BEhv025DsQ8BqJkLczS0xHGmtA1troZZWAXzkS-L1xu6PryGcbKf2M5elmVvdJcGrNE_BX6lt/pub?gid=0&single=true&output=csv";

function preload(){
  data = loadTable(url, "csv", "header");
  chips = loadImage("ketchupchips.jpg");
  gummies = loadImage("4dgummies.jpg");
  aloe = loadImage("aloe.png");
  oreos = loadImage("oreos.jpg");
  pretzels = loadImage("pretzel.png");
}

function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(100);
  textFont("Comic Sans");
  textSize(30);
  fill(255);
  if(data){
    // let numRows = data.getRowCount();

    //data collection
    let calories = data.getColumn("Calories");
    let sugar = data.getColumn("Sugar");
    let carbs = data.getColumn("Carbs");
    let sodium = data.getColumn("Sodium");
    let protein = data.getColumn("Protein");

    // top text

    text("Nutrition Facts", 115, 30);
    textSize(15);
    text("Hover over a snack to see its nutritional content", 56, 60);

    //images of foods

    image(chips, 30, 70, 100, 150);
    image(gummies, 150, 70, 100, 150);
    image(aloe, 280, 70, 100, 150);
    image(oreos, 80, 430, 100, 150);
    image(pretzels, 210, 430, 100, 150);

//Chips

    if(mouseX > 30 && mouseX < 130 && mouseY > 70 && mouseY < 220){
      textSize(15);
      
      rect(20,225,120,100);
      fill(0);
      text("Calories = " + calories[0], 30, 250);
      text("Sugar = " + sugar[0] + " g", 30, 265);
      text("Carbs = " + carbs[0] + " g", 30, 280);
      text("Sodium = " + sodium[0] + " g", 30, 295);
      text("Protein = " + protein[0] + " g", 30, 310);
    }

//Gummies

    if(mouseX > 150 && mouseX < 250 && mouseY > 70 && mouseY < 220){
      textSize(15);
      
      rect(140,225,120,100);
      fill(0);
      text("Calories = " + calories[1], 150, 250);
      text("Sugar = " + sugar[1] + " g", 150, 265);
      text("Carbs = " + carbs[1] + " g", 150, 280);
      text("Sodium = " + sodium[1] + " g", 150, 295);
      text("Protein = " + protein[1] + " g", 150, 310);
    }

//Aloe

    if(mouseX > 280 && mouseX < 380 && mouseY > 70 && mouseY < 220){
      textSize(15);
      
      rect(270,225,120,100);
      fill(0);
      text("Calories = " + calories[2], 280, 250);
      text("Sugar = " + sugar[2] + " g", 280, 265);
      text("Carbs = " + carbs[2] + " g", 280, 280);
      text("Sodium = " + sodium[2] + " g", 280, 295);
      text("Protein = " + protein[2] + " g", 280, 310);
    }

//Oreos

   if(mouseX > 80 && mouseX < 180 && mouseY > 430 && mouseY < 580){
      textSize(15);
      
      rect(70,320,120,100);
      fill(0);
      text("Calories = " + calories[3], 80, 345);
      text("Sugar = " + sugar[3] + " g", 80, 360);
      text("Carbs = " + carbs[3] + " g", 80, 375);
      text("Sodium = " + sodium[3] + " g", 80, 390);
      text("Protein = " + protein[3] + " g", 80, 405);
    }

//Pretzels

    if(mouseX > 210 && mouseX < 310 && mouseY > 430 && mouseY < 580){
      textSize(15);
      
      rect(200,320,120,100);
      fill(0);
      text("Calories = " + calories[4], 210, 345);
      text("Sugar = " + sugar[4] + " g", 210, 360);
      text("Carbs = " + carbs[4] + " g", 210, 375);
      text("Sodium = " + sodium[4] + " g", 210, 390);
      text("Protein = " + protein[4] + " g", 210, 405);
    }

    // for(let i = 0; i < numRows; i++){
    //   let x = 50;
    //   let y = 100 + i * 50;
    //   let w = carbs[i];
    //   let h = 10;

       

      

    //   textAlign(LEFT);
    //   fill(255);
    //   textSize(14);
    //   text(names[i], x, y - 5);
    //   textAlign(CENTER);
    //   text("Carbs of Food Items", width/2, 50);
    // }
  }

}
