// Condicional if and else if and else
function viajar(destino) {
    if(destino == "Brasil") {
             console.log('Gire a la izquierda');
    } else if(destino === 'Argentina') {
             console.log('Gire a la derecha');
    } else {
             console.log('Nos perdimos');''
    }
  };
  viajar('Brasil');
  viajar('Argentina');
  viajar ('Peru');

  // Condicional IF AND ELSE
  function puedeManejar(edad) {
    if(edad >= 18) {
             console.log( true );
    } else{
    console.log( false );
    }
  }
  
  puedeManejar(17);
  puedeManejar(25);

// NOMENCLATURA camelCase JavaScript
// Une 2 o mas palabras, la primera letra de la palabra es con minuscula,
// desde la segunda o mas, la primera letra de la palabra debe ser con mayuscula.

// NOMENCLATURA PascalCase JavaScript
// Une 2 o mas palabras, la primera letra de cada palabra es con mayuscula.

// NOMENCLATURA snake_case javascript
// Une 2 o mas palabras, todas las palabras son con minusculas y se dan espacio con '_' guion bajo.
