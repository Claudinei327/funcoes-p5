function somarNumeros(){
let numero1 = 127835;
let numero2 = 867680;
let resultado = numero1 + numero2;
console.log(resultado);
texto = 'o texto da soma é:' + resultado;
textSize(25);
fill("green")
text(texto,5,10,350,150);
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  somarNumeros()
}
