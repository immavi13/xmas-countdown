//seleziono tutti gli elementi che ho scritto in HTML come id="..." in una variabile
/*----------------
DOM elements
-----------------*/
const daysElm = document.querySelector('#days');
const hoursElm = document.querySelector('#hours');
const minutesElm = document.querySelector('#minutes');
const secondsElm = document.querySelector('#seconds');

//scritta buon natale alla fine
const panelElm = document.querySelector(".panel");

//data di natale
const endDate = new Date("December 25 2022");
//in milli secondi partendo dal 1970 (così funziona questa variabile)
//getTime è un metodo
const endDateInMs = endDate.getTime()

//ora attuale
//creiamo un nuovo oggetto e richiamiamo la variabile getTime, senza stare a creare un'altra
const nowInMs = new Date().getTime();
//differenza tra la fine e la data di oggi
const diff = endDateInMs - nowInMs;
// per vedere il risultato su chrome, ispeziona, console in alto console.log(diff);

//creaiamo una tabella per esprimere ogni dato(giorni,oreminuti,secondi) in millisecondi
//tabella in ms
const secondInMs = 1000; 
const minuteInMs = 60 * secondInMs; //in 1 minuto ci sono 60 secondi
const hourInMs = 60 * minuteInMs; 
const daysInMs = 24 * hourInMs; //in 1 giorno abbiamo 24h
// per vedere il risultato su chrome, ispeziona, console in alto console.log(diff / daysInMs);

//svolgo i calcoli nella funzione
//daysElm.innerHTML = Math.floor(diff / daysInMs); //qui andrà il calcolo che farà js nella riga prima
//a noi non interessa la parte decimale quindi usiamo math.floor

//ci serve il modulo per ottenere il resto della divisione precedente (di diff) per ottenere le ore esatte
//hoursElm.innerHTML = Math.floor( (diff % daysInMs) / hourInMs);
//minutesElm.innerHTML = Math.floor( (diff % hourInMs) / minuteInMs);
//secondsElm.innerHTML = Math.floor ( (diff % minuteInMs) / secondInMs);

//1)la funzione che viene eseguita ogni volta per un secondo 2)ogni quanto deve essere eseguito il millisecondi 
const counterTimer = setInterval(timer, 1000); //richiama la funzione timer di dopo
//setInterval aggiorna ogni secondo, quindi non c'è bisogno di aggiornare la nostra pagina web

//la funzione viene eseguita ogni secondo
// function timer() {
    //prova console.log('Ciao');
    //si crea un numero che indica quante volte viene eseguito il ciao
//}

function timer() {
    //ora attuale
    const nowInMs = new Date().getTime();

    //differenza tra la fine e la data di oggi
    if ( diff > 0 ){
        //sono opache perchè abbiamo scritto false nella condizione per non vedere i numeri, per inserire nel pannello buon natale
        const diff = endDateInMs - nowInMs;

        daysElm.innerHTML = Math.floor(diff / daysInMs); 
        hoursElm.innerHTML = Math.floor( (diff % daysInMs) / hourInMs);
        minutesElm.innerHTML = Math.floor( (diff % hourInMs) / minuteInMs);
        secondsElm.innerHTML = Math.floor ( (diff % minuteInMs) / secondInMs);
    } else { //arrivati al 25/12 finisce il timer
        clearInterval(timer); 
        panelElm.innerHTML = "<h1>🎄🤶Buon Natale🎅❄️</h1>"; 
        //nell'innerhtlm posso scrivere il codice html
    }
}

// animazione neve
$.fn.christmas = function() {
    $(this).each(function() {
     $(this).html($(this).text().split("").map(function(v, i) {
       return '<span class="christmas-' + (i % 2 == 0 ? 'gold' : 'blue') + '">' + v + '</span>';
      }).join(""));
    });
};
