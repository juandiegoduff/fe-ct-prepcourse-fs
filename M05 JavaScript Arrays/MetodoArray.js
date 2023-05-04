// .push para AGREGAR ELEMENTOS AL FINAL DEL ARREGLO
// .unshift para AGREGAR ELEMENTOS AL INICIO DEL ARREGLO
var colores = ['Amarillo', 'Azul',"Morado"];
colores.push('Rojo'); // Arregla al final del arreglo
colores.unshift('Verde'); // Agrega al principio del arreglo
colores.pop(); // Elimina al ultimo del arreglo
colores.shift(); // Elimina al primero del arreglo
console.log(colores);

// .includes SI CONTIENE EL PARAMETRO DENTRO DEL ARREGLO
var pintores = ['Picasso', 'Velázquez', 'Van Gogh', 'Dalí'];
var existeDali = pintores.includes('Monet'); // Si contiene Dali dentro de pintores
console.log(existeDali); // Bota un boolean true si esta dentro del arreglo or false si no esta


// .every Determina si todos los elementos del arreglo cumplen la misma
//OPCION 1 Clase de Metodo .every
var numeros = [ 1, 6, 8, 9, 43 ];
var cumplenCondicion = numeros.every( (num) => { // Logra verificar si todos los elementos del arreglo cumplen con la misma condicion
        return num > 5 // el return lo usa para hacer la condicion
    });
console.log(cumplenCondicion);

// OPCION 2 .every MIA
var numeros = [ 9, 5, 8, 9, 43 ];
var cumplenCondicion = numeros.every( num => num > 5); // (elemento => condicion)
console.log(cumplenCondicion);


// .split convierte un string en un arreglo, donde cada elemento se convierte en un sub-string dependiendo el parametro divisor que coloquemos.
var palabra = 'Henri';
var palabraSeparada = palabra.split(''); // Separa cada letra en un elemento de un arreglo
palabraSeparada.pop(); // Elimina el ultimo elemento del arreglo
palabraSeparada.push('y'); // Agrega el parametro al ultimo del arreglo
console.log(palabraSeparada);


// .join para unir los elementos del arreglo y convertir en string
var palabraArreglada = palabraSeparada.join('');
console.log(palabraArreglada);



// .forEach para cada uno de los elementos hacer tal cosa y no puede realizar cambios
// OPCION 1
var numeros = [ 1, 2, 3, 4 ];
numeros.forEach( (num) => { console.log(num) } );
numeros.forEach((num) => {
    if (num === 3)
    console.log(num);
});

//OPCION 2
var numeros = [ 5, 6, 7, 8 ];
numeros.forEach( num => console.log(num));
numeros.forEach(num => { // Si coloca {} Para implementar condicionales o returns
    if (num === 3)
    console.log(num);
});


// MAP Permite recorrer y modificar los elementos del arreglo y bota un nuevo arreglo con los elementos modificados
// OPCION 1
var numeros = [ 1, 2, 3, 4 ];
var masUno = numeros.map( (num) => {
        return num + 1 // Modifica para cada elemento
    });

console.log(masUno);

//OPCION 2
var numeros = [5, 6, 7, 8];
var masUno = numeros.map( num => num + 1);// Modifica para cada elemento
console.log(masUno);

