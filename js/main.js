const invia = document.getElementById('clientData');

        // TASTO GENERA // 

    invia.addEventListener('click', 
     function(){

        const animation = document.getElementById('ticket');
        animation.classList.add('animation');

        const distanza = parseInt(document.getElementById('km').value);
        const euro = 0.21;
        const nome = document.getElementById('nome');


        const prezzo = (distanza * euro);

        let sconto = document.getElementById('listaSconto').value; 
        let prezzoFinale;

        if(sconto == 'EndPlus') {      
            prezzoFinale = ( prezzo * 0.8 );
        }

        if(sconto == 'Standard') {     
            prezzoFinale = prezzo;     
        }

        if(sconto == 'Over') {
            prezzoFinale = ( prezzo * 0.6);     
        }
            // VALORE ELEMENTI UTENTE //

         document.getElementById('namp').innerHTML = nome.value;
         document.getElementById('off_n').innerHTML = sconto;
         document.getElementById('carr_n').innerHTML =  Math.floor(Math.random() * 20 + 1);
         document.getElementById('cod_cp').innerHTML = Math.floor(Math.random() * 9999 + 90000 );
         document.getElementById('tkt_p').innerHTML = prezzoFinale.toFixed(2) + '€';
           
            setTimeout(myDelay, 500);
            function myDelay() {
                let bigliettoGenerato = document.getElementById('tkt');
                bigliettoGenerato.style.display = 'flex';

                

        }

            setTimeout(myDelay2, 1000);
            function myDelay2() {

            let successo = document.getElementById('success2');
            successo.style.display = 'block'
        }
    }); // fine TASTO GENERA //

        // TASTO ANNULA //

        const annulla = document.getElementById('delete');
        bigliettoGenerato = document.getElementById('tkt');
            
        annulla.addEventListener('click', 
            function(){ 
            bigliettoGenerato.style.display = 'none';

            let successo = document.getElementById('success2');
            successo.style.display = 'none'
        } );
    
        // FINE TASTO ANULLA //

    













