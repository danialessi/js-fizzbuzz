// Scrivi un programma che stampi i numeri da 1 a 100, ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz. Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// multiplo di un numero
var numero;

var multiplo3 = numero % 3 == 0;
// console.log(multiplo3);

var multiplo5 = numero % 5 == 0;
// console.log(multiplo5);

// stampo i numeri da 1 a 100 
for (var i = 1; i <= 100; i++) {
    var numero = i;
    console.log(numero);

    if (numero = multiplo3) {
        console.log("Fizz")
    } else if (numero = multiplo5) {
        console.log("Buzz")
    }
}