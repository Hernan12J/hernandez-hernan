//Problema 2
var valor1 = 5;
var valor2 = 5;

console.log("Los numero son: " +valor1+ " y " +valor2)
console.log("Suma: " + (valor1 + valor2));
console.log("Resta: " + (valor1 - valor2));
console.log("Multiplicación: " + (valor1 * valor2));
console.log("División: " + (valor1 / valor2));

//Problema 3
let Palabra1 = "Cristiano Ronaldo";
let Palabra2 = "Siiiiuuuu...";

console.log("La palabra es : " + Palabra1 + " " + Palabra2);

//problema 4
const name= "Hernan";
const age= 20;

console.log("La variable es: " +typeof name);
console.log("La variable es: " +typeof age);

//Problema 5

let ObjetoP= {
    Num: 12,
    Nombre: "Hernan",
    Id: true,
    ObjVacio: {}
    };

console.log(ObjetoP);

//problema 6
function SumaMu(num) {
    let Acumulador = 0;
    
    for (let i = 3; i < num; i++) {
      if (i % 3 === 0 || i % 5 === 0) {
        Acumulador += i;
      }
    }
    
    return Acumulador;
  }
  
  console.log(SumaMu(16)); 
  