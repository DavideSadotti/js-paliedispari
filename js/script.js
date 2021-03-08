// FUNCTION isPALINDROMA
var palindroma = document.getElementById('palindroma');
var risultato = document.getElementById('risultato');
var parola = prompt("Inserisci una qualsiasi parola");

function isPalindroma(str) {
    for (var i = 0; i < parola.length / 2; i++) {
        if (parola[i] !== parola[parola.length - 1 - i]) {
            return risultato.innerHTML = 'La parola scelta non è un palindromo';
        }
    }
    return risultato.innerHTML = 'La parola scelta è un palindromo';
}

palindroma.addEventListener('click', isPalindroma);


// FUNCTION isPARIDISPARI
