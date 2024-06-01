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


// zad 7

// Poproszenie użytkownika o podanie dwóch liczb całkowitych i przekształcenie ich na liczby
// let firstNumber = parseInt(prompt("Podaj pierwszą liczbę całkowitą:"));
// let secondNumber = parseInt(prompt("Podaj drugą liczbę całkowitą:"));

// Sprawdzenie, czy podane wartości są liczbami
// if (!isNaN(firstNumber) && !isNaN(secondNumber)) {
    // Obliczenie sumy podanych liczb
//    let sum = firstNumber + secondNumber;
    // Wyświetlenie wyniku w oknie przeglądarki
//    alert("Wynik dodawania: " + sum);
// } else {
    // Informacja w przypadku podania niepoprawnych wartości
//    alert("Podano niepoprawne wartości. Podaj liczby całkowite.");
// }

// zad8 

function findMax() {
    // Pobierz wartości z elementów input
    var num1 = parseFloat(document.getElementById("number1").value);
    var num2 = parseFloat(document.getElementById("number2").value);
    var num3 = parseFloat(document.getElementById("number3").value);

    // Sprawdź, czy wszystkie wartości są liczbami
    if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
        console.log("Wprowadź prawidłowe liczby");
        document.getElementById("result").innerText = "Wprowadź prawidłowe liczby";
        return;
    }

    // Znajdź największą liczbę
    var maxNum = Math.max(num1, num2, num3);

    // Wyświetl wynik w konsoli
    console.log("Największa liczba to: " + maxNum);

    // Wyświetl wynik w elemencie HTML
    document.getElementById("result").innerText = "Największa liczba to: " + maxNum;
}

function findGCD() {
    let num1 = parseInt(document.getElementById('number1').value);
    let num2 = parseInt(document.getElementById('number2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerText = 'Proszę wprowadzić dwie liczby całkowite.';
        return;
    }

    let gcd = euclideanAlgorithm(num1, num2);
    document.getElementById('result').innerText = 'Największy wspólny dzielnik: ' + gcd;
    console.log('Największy wspólny dzielnik:', gcd);
}

function euclideanAlgorithm(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}
