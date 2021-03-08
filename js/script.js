// FUNCTION isPALINDROMA
// var palindroma = document.getElementById('palindroma');
// var risultato = document.getElementById('risultato');
// var parola = prompt("Inserisci una qualsiasi parola");
//
// function isPalindroma(par) {
//     for (var i = 0; i < parola.length / 2; i++) {
//         if (parola[i] !== parola[parola.length - 1 - i]) {
//             return risultato.innerHTML = 'La parola scelta non è un palindromo';
//         }
//     }
//     return risultato.innerHTML = 'La parola scelta è un palindromo';
// }
//
// palindroma.addEventListener('click', isPalindroma);
//

// FUNCTION isPARIDISPARI
var lettera;

do{
  var pod = prompt("Scegli pari o dispari! [p/d]");
  if(pod == "p"){
    lettera = true;
    document.getElementById('pod').innerHTML = "Pari";
  }else if(pod == "d"){
    lettera = true;
    document.getElementById('pod').innerHTML = "Dispari";
  }else{
    lettera = false;
    alert("Puoi inserire solamente questi due caratteri 'p' o 'd'")
  }
}while(lettera == false);


var numero = parseInt(prompt("Scegli un numero casuale tra 1 e 5"));
document.getElementById('numero').innerHTML = numero;

var numRandom = document.getElementById('numRandom');
var random = Math.floor(Math.random() * 5) + 1;
numRandom.addEventListener('click',
  function(){
    document.getElementById('numPc').innerHTML += random;
  }
);

var somma = numero + random;

var vinto = document.getElementById('vinto');
vinto.addEventListener('click',
  function(){
    if(somma % 2 == 0 && pod == "p" || somma % 2 == 1 && pod == "d" ){
      document.getElementById('finale').innerHTML = "Hai vinto";
    }else{
      document.getElementById('finale').innerHTML = "Hai perso";
    }
  }
);
