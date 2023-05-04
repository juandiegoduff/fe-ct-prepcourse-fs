// FOR
var arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
   console.log(arr[i]);
}

function encontrarLetra(string){
    var letra = string.split('');

    for (let i = 0; i < letra.length; i++) {
        if(letra[i] === 'p')
            console.log('Si contiene a P');        
    }
}
encontrarLetra('JavapScript');

// WHILE
var arr = [];
while (arr.length < 5) {
   arr.push('Juan');
}
console.log(arr);

