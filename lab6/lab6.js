document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('formularz-rejestracyjny');

    const imie = document.getElementById('imie');
    const nazwisko = document.getElementById('nazwisko');
    const email = document.getElementById('email');
    const haslo = document.getElementById('haslo');
    const powtorzHaslo = document.getElementById('powtorz-haslo');
    const plec = document.getElementById('plec');
    const telefon = document.getElementById('telefon');
    const dataUrodzenia = document.getElementById('data-urodzenia');
    const kraj = document.getElementById('kraj');
    const wojewodztwo = document.getElementById('wojewodztwo');
    const adresZamieszkania = document.getElementById('adres-zamieszkania');
    const adresKorespondencyjnyCheckbox = document.getElementById('adres-korespondencyjny-checkbox');
    const adresKorespondencyjnyDiv = document.getElementById('adres-korespondencyjny-div');
    const adresKorespondencyjny = document.getElementById('adres-korespondencyjny');

    // Zadanie 2a: Funkcja sprawdzająca czy pole posiada wartość
    function sprawdzCzyPolePosiadaWartosc(pole) {
        if (pole.value.trim() === '') {
            pole.setCustomValidity('To pole jest wymagane.');
            return false;
        } else {
            pole.setCustomValidity('');
            return true;
        }
    }

    // Zadanie 2b: Funkcja sprawdzająca długość znaków
    function sprawdzDlugoscZnakow(pole, min) {
        if (pole.value.length < min) {
            pole.setCustomValidity(`To pole musi zawierać co najmniej ${min} znaków.`);
            return false;
        } else {
            pole.setCustomValidity('');
            return true;
        }
    }

    // Zadanie 2c: Funkcja sprawdzająca poprawność adresu email
    function sprawdzPoprawnoscEmail(pole) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!regex.test(pole.value)) {
            pole.setCustomValidity('Proszę podać poprawny adres email.');
            return false;
        } else {
            pole.setCustomValidity('');
            return true;
        }
    }

    // Zadanie 2d: Funkcja sprawdzająca trudność hasła
    function sprawdzTrudnoscHasla(pole) {
        if (pole.value.length < 8) {
            pole.setCustomValidity('Hasło musi zawierać co najmniej 8 znaków.');
            return false;
        } else {
            pole.setCustomValidity('');
            return true;
        }
    }

    // Zadanie 4: Funkcja walidująca datę urodzenia (pełnoletność)
    function walidujDateUrodzenia(pole) {
        const dzis = new Date();
        const data = new Date(pole.value);
        const osiemnascieLatTemu = new Date(dzis.getFullYear() - 18, dzis.getMonth(), dzis.getDate());
        if (data <= osiemnascieLatTemu) {
            pole.setCustomValidity('');
            return true;
        } else {
            pole.setCustomValidity('Musisz mieć co najmniej 18 lat.');
            return false;
        }
    }

    // Zadanie 5: Funkcja walidująca powtórzenie hasła
    function walidujPowtorzenieHasla(pole1, pole2) {
        if (pole1.value !== pole2.value) {
            pole2.setCustomValidity('Hasła muszą być takie same.');
            return false;
        } else {
            pole2.setCustomValidity('');
            return true;
        }
    }

    // Zadanie 2f: Funkcja walidująca formularz
    function walidujFormularz(event) {
        let isValid = true;

        isValid = sprawdzCzyPolePosiadaWartosc(imie) && isValid;
        isValid = sprawdzCzyPolePosiadaWartosc(nazwisko) && isValid;
        isValid = sprawdzCzyPolePosiadaWartosc(email) && sprawdzPoprawnoscEmail(email) && isValid;
        isValid = sprawdzCzyPolePosiadaWartosc(haslo) && sprawdzDlugoscZnakow(haslo, 8) && isValid;
        isValid = sprawdzCzyPolePosiadaWartosc(powtorzHaslo) && walidujPowtorzenieHasla(haslo, powtorzHaslo) && isValid;
        isValid = sprawdzCzyPolePosiadaWartosc(plec) && isValid;
        isValid = sprawdzCzyPolePosiadaWartosc(telefon) && isValid;
        isValid = sprawdzCzyPolePosiadaWartosc(dataUrodzenia) && walidujDateUrodzenia(dataUrodzenia) && isValid;
        isValid = sprawdzCzyPolePosiadaWartosc(kraj) && isValid;

        if (kraj.value === 'Polska') {
            wojewodztwo.disabled = false;
            adresZamieszkania.disabled = false;
            isValid = sprawdzCzyPolePosiadaWartosc(wojewodztwo) && isValid;
            isValid = sprawdzCzyPolePosiadaWartosc(adresZamieszkania) && isValid;

            if (!adresKorespondencyjnyCheckbox.checked) {
                adresKorespondencyjny.disabled = false;
                isValid = sprawdzCzyPolePosiadaWartosc(adresKorespondencyjny) && isValid;
            }
        }

        if (!isValid) {
            event.preventDefault();
        } else {
            alert('Formularz został poprawnie wypełniony!');
        }
    }

    // Zadanie 6a: Pokazywanie/ukrywanie pola "Adres korespondencyjny"
    adresKorespondencyjnyCheckbox.addEventListener('change', function () {
        if (this.checked) {
            adresKorespondencyjnyDiv.style.display = 'none';
            adresKorespondencyjny.disabled = true;
        } else {
            adresKorespondencyjnyDiv.style.display = 'block';
            adresKorespondencyjny.disabled = false;
        }
    });

    // Zadanie 6b: Aktywacja pola "Województwo" po wybraniu kraju
    kraj.addEventListener('change', function () {
        if (this.value === 'Polska') {
            wojewodztwo.disabled = false;
            adresZamieszkania.disabled = false;
        } else {
            wojewodztwo.disabled = true;
            adresZamieszkania.disabled = true;
        }
    });

    // Zadanie 8a: Ograniczenie pola "Telefon" do cyfr
    telefon.addEventListener('input', function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });

    // Zadanie 2f: Obsługa walidacji formularza przy jego wysyłaniu
    form.addEventListener('submit', walidujFormularz);
});
