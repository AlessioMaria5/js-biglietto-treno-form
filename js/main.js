const invia = document.getElementById('clientData');

    invia.addEventListener('click', 
     function() {

        const distanza = parseInt(document.getElementById('km').value);
        const euro = 0.21;
        const nome = document.getElementById('nome');


        const prezzo = (distanza * euro);

        let sconto = document.getElementById('listaSconto').value; 
        let prezzoFinale;

        if(sconto == 'minorenne') {
            
            prezzoFinale = ( prezzo * 0.8 );

        }

        if(sconto == 'maggiorenne') {
            
            prezzoFinale = prezzo;
            
        }

        if(sconto == 'anziano') {

            prezzoFinale = ( prezzo * 0.6);

            
        }

        prezzoFinale = prezzo.toFixed(2);

         document.getElementById('namp').innerHTML = nome.value;
         document.getElementById('off_n').innerHTML = sconto;
         document.getElementById('carr_n').innerHTML =  Math.floor(Math.random() * 20 + 1);
         document.getElementById('cod_cp').innerHTML = Math.floor(Math.random() * 9999 + 90000 );
         document.getElementById('tkt_p').innerHTML = prezzoFinale + '€';


            let bigliettoGenerato = document.getElementById('ticket');
            bigliettoGenerato.style.display = 'block';


  
        
            
        // alert(`I valori inseriti sono: ${nome.value} ${distanza.value}Km ${sconto.value}`);
    }

);

const annulla = document.getElementById('delete');
bigliettoGenerato = document.getElementById('ticket');
            
annulla.addEventListener('click', 
function(){ bigliettoGenerato.style.display = 'none'; } );
    













