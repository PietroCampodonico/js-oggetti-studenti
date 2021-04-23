/*
Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
Creare un array di oggetti di studenti.
Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
*/

// oggetto a 3 chiavi

var studente_1 = {
    nome: "Paolo",
    cognome: "Rossi",
    eta: "25",
};

//stampo ogni proprietà dell'oggetto

function printObjectKeysAndValues(nomeElemento) {
    for (var key in nomeElemento) {
     console.log(key + ": " + nomeElemento[key])
    }
}

printObjectKeysAndValues(studente_1);

//array di studenti
var registroDiClasse = [

        studente_1 = {
            nome: "Paolo",
            cognome: "Rossi",
            eta: "25",
        },

        studente_2 = {
            nome: "Mario",
            cognome: "Verdi",
            eta: "30",
        },

        studente_3 = {
            nome: "Enzo",
            cognome: "Bianchi",
            eta: "21",
        },

];


//Ciclo e stampo i dati di ogni studente
for (var i = 0; i < registroDiClasse.length; i++) {
    var datiStudente = (registroDiClasse[i]);

    console.log("studente n°" + (i+1) + ": " + datiStudente.nome + " " + datiStudente.cognome);
}

// faccio generare all'utente le 3 chiavi di un nuovo oggetto studente{} e lo inserisco nell'array

var studente_4 = {}

for (var i = 0; i < 3; i++) {

    if (i === 0) {
        
        inputUtente = "Nome";
        var riferimentiStudente = prompt("Studente n°" + registroDiClasse.length + ": inserire " + inputUtente + " dello studente");
        studente_4.nome = riferimentiStudente;
        
    } else if (i === 1) {
        
        inputUtente = "Cognome";
        var riferimentiStudente = prompt("Studente n°" + registroDiClasse.length + ": inserire " + inputUtente + " dello studente");
        studente_4.cognome = riferimentiStudente;
        
    } else {
        inputUtente = "età";
        var riferimentiStudente = prompt("Studente n°" + registroDiClasse.length + ": inserire " + inputUtente + " dello studente");
        studente_4.eta = riferimentiStudente;
    }
}

registroDiClasse.push(studente_4);
console.log(registroDiClasse);
