// Pobierz element, w którym będziemy wyświetlać odliczanie
//const countdownElement = document.getElementById('countdown');

// Funkcja do odliczania
//async function countdown() {
   // countdownElement.textContent = "Odliczanie sylwestrowe rozpoczyna się...";
  //  for (let i = 10; i >= 0; i--) {
  //      countdownElement.textContent = i;
        // Poczekaj sekundę przed wypisaniem kolejnej liczby
 //       await new Promise(resolve => setTimeout(resolve, 1000));
//    }
//    countdownElement.textContent = "Happy New Year!";
//}

// Uruchom funkcję odliczania po załadowaniu strony
// window.onload = countdown;


// Funkcja odliczania
async function countdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = "Odliczanie sylwestrowe rozpoczyna się...";

    let count = 10;
    while (count >= 0) {
        countdownElement.textContent = count;
        // Poczekaj sekundę przed wypisaniem kolejnej liczby
        await new Promise(resolve => setTimeout(resolve, 1000));
        count--;
    }

    countdownElement.textContent = "Happy New Year!";
}

// Uruchom funkcję odliczania po załadowaniu strony
window.onload = countdown;


function silnia(n) {
    // Sprawdź czy n jest liczbą całkowitą nieujemną
    if (typeof n !== 'number' || n < 0 || !Number.isInteger(n)) {
        return NaN; // Jeśli n nie jest liczbą całkowitą nieujemną, zwróć NaN
    }

    // Jeśli n jest zerem lub jedynką, zwróć 1
    if (n === 0 || n === 1) {
        return 1;
    }

    // W przeciwnym razie, oblicz silnię rekurencyjnie
    return n * silnia(n - 1);
}

// Poproś użytkownika o wprowadzenie liczby
let input = window.prompt("Wprowadź liczbę całkowitą, dla której chcesz obliczyć silnię:");

// Sprawdź czy użytkownik anulował okno prompt lub nie wprowadził liczby
if (input === null || input === "") {
    console.log("Anulowano lub nie wprowadzono liczby.");
} else {
    // Spróbuj przekonwertować wprowadzoną wartość na liczbę całkowitą
    let number = parseInt(input);

    // Sprawdź czy wartość jest liczbą całkowitą
    if (!isNaN(number) && Number.isInteger(number) && number >= 0) {
        // Oblicz silnię dla wprowadzonej liczby
        let factorial = silnia(number);
        console.log(`Silnia liczby ${number} wynosi: ${factorial}`);
    } else {
        console.log("Wprowadzona wartość nie jest liczbą całkowitą nieujemną.");
    }
}
