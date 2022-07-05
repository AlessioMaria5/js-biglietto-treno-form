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

            prezzoFinale = ( prezzo * 0.6 );

            
        }

         document.getElementById('namp').innerHTML = nome.value;
         document.getElementById('off_n').innerHTML = sconto;
         document.getElementById('carr_n').innerHTML = 
         document.getElementById('cod_cp').innerHTML = 
         document.getElementById('tkt_p').innerHTML = prezzoFinale;
  

        alert('i tuoi valori sono' + distanza + ' ' + nome.value + ' ' + sconto + prezzoFinale );
        // alert(`I valori inseriti sono: ${nome.value} ${distanza.value}Km ${sconto.value}`);

        
    }


);












