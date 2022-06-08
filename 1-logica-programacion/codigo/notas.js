/**
 *Problema
 *Imprimir los numeros pares del 1-20
 *exceptuando el 18. 
*/

//while
//while-do
//for

// inicio, condicion, razon de cambio

var i=0; //inicio
while(i <=20){ //condicion
  //console.log('numero: '+ i) //concatenar "numero: 20 " 
  if(i%2 === 0 && i !== 18){
    //console.log('numero: '+ i) // juntar "numero: " 20
  }
  
  //i +=1 //operador de asignacion suma
  //i = i + 1; //razon de cambio
  i++; //operador de incremento
}

//for (inicio; condicion; razonCambio)
for (var j=0; j<=20; j++){
  if(j%2===0 && j!==18){
    console.log('numero for: ',j);
  }
  //es donde se ejecuta la razon de cambio
}

/** 
 * Problema
 * Imprimir los numeros pares del 1-20,
 * exceptuando el 18.
*/

// while
// do - while
// for

// partes de un ciclo
// inicio, condicion, razon de cambio

var i = 0; // inicio
while (i <= 20) { // condicion
  if (i % 2 === 0 && i !== 18) {
    // console.log('numero while: ', i); 
  }
  // razon de cambio
  i++;
}

// for (inicio; condicion; razonCambio) {
for (var j = 0; j <= 20; j++) {
  if (j % 2 === 0 && j !== 18) {
    // console.log('numero for: ', j); 
  }
  // es donde se ejecuta la razon de cambio
}

// inicio
var k = 0;
do {
  if (k % 2 === 0 && k !== 18) {
    console.log('numero doWhile: ', k); 
  }
  // razon de cambio
  k++;
} while(k <= 20) // condicion

