// OBJETO Math.pow() es una potencia, el primero es base y el segundo es la portencia
console.log(Math.pow(2,3)); // ESTO ES IGUAL A 8

// OBJETO Math.round() and Math.floor() and Math.ceil()
// Math.round() SIRVE PARA REDONDER 0.49 a 00 y 0.50 a 1
console.log(Math.round(0.49)); // 0
console.log(Math.round(0.50)); // 1

// Math.floor() SIRVE PARA REDONDER AL ENTERO MENOR 5.96 a 5
console.log(Math.floor(5.96)); // 5
console.log(Math.floor(7,77)); // 7

// Math.ceil() SIRVE PARA REDONDER AL ENTERO MAYOR 3.12 a 4
console.log(Math.ceil(3,12)); //Se supone q es 4 pero arroja 3
console.log(Math.ceil(4,21)); //Se supone q es 5 pero arroja 4

//OBJETO Math.max que permite conocer el maximo valor y Math.min que permite ver el minimo
console.log(Math.min(1,2,4,5,6,7,8)); // 1
console.log(Math.max(1,25,546,634,23)); // 634

//OBJETO Math.random RANDOM entre el 0 y 1 ES DECIMAL
console.log(Math.random());