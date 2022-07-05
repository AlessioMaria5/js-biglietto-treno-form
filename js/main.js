

const distanza = document.getElementById('km');
const euro = 0.21;
const nome = document.getElementById('nome');


let prezzo = (distanza * euro);
let sconto = document.getElementById('listaSconto'); 
let prezzoFinale;



const invia = document.getElementById('clientData');

    invia.addEventListener('click', 
     function() {

        if(sconto == 'minorenne') {
            
            prezzoFinale = ( prezzo * 0.8 );
            
        }

        alert('i tuoi valori sono' + distanza.value + ' ' + nome.value + ' ' + sconto.value + ' ' + prezzoFinale );
        // alert(`I valori inseriti sono: ${nome.value} ${distanza.value}Km ${sconto.value}`);
    }

);







