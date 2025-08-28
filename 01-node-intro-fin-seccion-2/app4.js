


console.log('Inicio de programa'); // 1

setTimeout( () => {
    console.log('Primer Timeout'); // 5
}, 3000 );

setTimeout( () => {
    console.log('Segundo Timeout'); // ??
}, 1 );

setTimeout( () => {
    console.log('Tercer Timeout'); // ??
}, 0 );

console.log('Fin de programa'); // 4

//* EL EVENT LOOP ES EL QUE DECIDE EL ORDEN 

// * TODOS LOS SETTIMEOUT SON ASINCRONOS Y AL FINAL EN NODE, NO SE SABE EN QUE ORDEN RESPONDERAN