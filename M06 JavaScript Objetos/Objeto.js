var deportes ={
    conBalon:["Football","Basketball"],
    sinBalon: ["Boxeo","Surf"],
};
var deportes ={
    conBalon:["Football","Basketball"],
    sinBalon: ["Boxeo","Surf"],
};

var persona ={nombre:"Lucas", edad:26, estudios: {esProgramador: true}};
// console.log(persona.edad);
// persona.nombre = 'Martín';
// console.log(persona.nombre);
var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
// console.log(autos);
delete autos.marcas;
// console.log(autos);

var misFunciones ={
    saludar: function(){
        console.log("Hola");
    },
};
misFunciones.saludar();

 // DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

var comidas = {};
var diferenciaNotaciones = function (pUno, pDos){
    comidas[pUno]=['Frutas', 'Vegetales'];
    comidas[pDos]=['Hamburguesas', 'Papas Fritas'];
};
diferenciaNotaciones('saludable', 'noSaludable');
console.log (comidas);
var persona ={nombre:"Lucas", edad:26, estudios: {esProgramador: true}};
// console.log(persona.edad);
// persona.nombre = 'Martín';
// console.log(persona.nombre);
var autos = {};
autos.marcas = ["Ford", "Audi", "Ferrari"];
// console.log(autos);
delete autos.marcas;
// console.log(autos);

var misFunciones ={
    saludar: function(){
        console.log("Hola");
    },
};
misFunciones.saludar();

 // DOT NOTATION
var atuendos = { manos: ['Guantes', 'Anillos'], pies: ['Zapatos', 'Soquetes'] };

// BRACKET NOTATION
atuendos['piernas'] = ['Bermudas', 'Pantalones'];
// console.log(atuendos);

var comidas = {};
var diferenciaNotaciones = function (pUno, pDos){
    comidas[pUno]=['Frutas', 'Vegetales'];
    comidas[pDos]=['Hamburguesas', 'Papas Fritas'];
};
diferenciaNotaciones('saludable', 'noSaludable');
console.log (comidas);

// HAS OWN PROPERTY DEVUELVE TRUE O FALSE SI EL OBJETO CONTIENE LA PROPIEDAD
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var tienePropiedad = libro.hasOwnProperty('autor');

console.log(tienePropiedad);

// KEYS DEVUELVE TODAS LAS PROPIEDADES DEL LIBRO
var libro = { autor: 'Borges', genero: 'Policial', año: 1990 };
var todasLasPropiedades = Object.keys(libro);

console.log(todasLasPropiedades);

// FOR IN RECORRE LAS VARIABLES DEL OBJETO
var mundo = {continentes:7, paises:195,oceanos:5};
for (let prop in mundo) {
    console.log('Esta es la propiedad: ', prop); // MUESTRA LA PROPIEDAD DEL OBJETO A RECORRER
    console.log('Este es el valor: ', mundo[prop]); // MUESTRA EL VALOR DE LA PROPIEDAD EN EL OBJETO RECORRIDo
 }

// NOS PERMITE CAMBIAR EL CONTEXTO DE LA PROPIEDAD EN LA QUE SE ESTA
var mascota={
    animal:'Perro',
    raza:'Ovejero Aleman',
    amistoso:true,
    nombre:'Firulais',
    info: function(){
        console.log('Mi perro es un'+this.raza)
    }
};
mascota.info();