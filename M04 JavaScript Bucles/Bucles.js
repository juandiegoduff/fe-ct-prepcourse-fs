// BUCLE FOR
var suma=0;
for (let i = 0; i < 5; i++) {
    
    suma = suma + i;
    console.log('Variable de iteración: ', i);
 }
 console.log('Variable suma: ', suma);

//BUCLE WHILE
var suma=0;
while(suma < 3) {
    suma = suma + 1;
        console.log(suma);
};

// EXPRESION SWITCH

// EJEMPLO SWITCH CON LOS DIAS y CON CASE ENTEROS
var  day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}
console.log (day);

//EJEMPLO CON EXPRESIONES

var expr = 'platanos';
switch (expr) {
    case 'Naranjas':
      console.log('El kilogramo de naranjas cuesta $0.59.');
      break;
    case 'Manzanas':
      console.log('El kilogramo de manzanas cuesta $0.32.');
      break;
    case 'Platanos':
      console.log('El kilogramo de platanos cuesta $0.48.');
      break;
    case 'Cerezas':
      console.log('El kilogramo de cerezas cuesta $3.00.');
      break;
    case 'Mangos':
    case 'Papayas':
      console.log('El kilogramo de mangos y papayas cuesta $2.79.');
      break;
    default:
      console.log('Lo lamentamos, por el momento no disponemos de ' + expr.toUpperCase()+ '.');
  }  
  console.log("¿Hay algo más que te quisiera consultar?");
  
// BUCLE DO - WHILE
let result = '';
let i = 0;

do {
  i =i + 1;
  result = result + i;
} while (i < 10);
console.log(result); // Expected output: "12345"

let j = 0;

do {
	console.log("El valor de i es: " + j);
	j+=5;
} while (j <= 50);

//BUCLE SALTA LA EJECUCION PARA LA SIGUIENTE ITERACION
let x = 0;
let n = 0;
while (x < 5) {
  x++;
  if (x == 3)
    continue;
  n += x;
  console.log('Valor de x:' +x); // SALTA cuando N=3
  console.log('Valor de n:' +n); // Por lo tanto tmb en N
}

// BUCLE BREAK PERMITE TERMINAR EL BUCLE O SENTENCIA
function comprobarBreak(x) {
  var i = 0;
  while (i < 6) {
     if (i == 3)
        break;
     i++;
  }
  return i * x;
}
console.log(comprobarBreak(2)); // El bucle termina cuando i=3