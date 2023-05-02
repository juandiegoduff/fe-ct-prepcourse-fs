//Función: sumaTres
function sumaTres(x) {
    console.log(x+3);
}
sumaTres(5);
// PRIMERA FORMA
function sumaTres(x){
    return x + 3;
}
console.log(sumaTres(6));

//SEGUNDA FORMA
var sumaTres= function(x){
    return x+3;
}
console.log(sumaTres(18));

//TERCERA FORMA
var sumaTres= (x)=>{
    return x+3;
}
console.log(sumaTres(238));
