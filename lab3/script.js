//alert("hello ")
//console.log("Hello world!")

//zad 3 
// let a = 10;
// let b = 20;
// let c = 23.3;
// console.log("Wynik dodawania to : "+ a+b+c);
// alert(a+b+c);

// document.getElementById("zad3").innerHTML="Wynik dodawania to : "+ (a+b+c);

// zad 4
//for (let i = 0; i <= 101; i++) {
  //  if (i % 2 === 0) {
 //       console.log(i);
   // }
//}

//zad 6
//a = prompt("Jak się nazywasz?! ");
//console.log(a);
//alert("cześć "+a)
//b = prompt("Jaką masz wędkę? "+a);
//alert("Twoja wędka jest "+b)

//zad 5
// a = parseFloat(prompt("Podaj długośc boku 1"));
// b = parseFloat(prompt("Podaj długośc boku 2"));
// c = parseFloat(prompt("Podaj długośc boku 3"));

// let p = (a+b+c)/2;

// console.log(p);

// let S = Math.sqrt(p*(p-a)*(p-b)*(p-c));
// console.log(S);

// Poproszenie użytkownika o podanie dwóch liczb całkowitych i przekształcenie ich na liczby
let firstNumber = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
let secondNumber = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

// Sprawdzenie, czy podane wartości są liczbami
if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    // Obliczenie sumy podanych liczb
    let sum = firstNumber + secondNumber;
    // Wyświetlenie wyniku w oknie przeglądarki
    alert("Wynik dodawania: " + sum);
} else {
    // Informacja w przypadku podania niepoprawnych wartości
    alert("Podano niepoprawne wartości. Podaj liczby całkowite.");
}
