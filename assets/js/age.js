$(() =>{
    $('#send').click(()=>{
        if($('.datepicker')[0].value !== ''){
            const birthdate = $('.datepicker')[0].value;
            const bYear = birthdate.slice(6,10);
            const bMonth = birthdate.slice(3,5);
            const bDay = birthdate.slice(0,2);
            const bNewFormat = new Date(`${bYear},${bMonth},${bDay}`);            
            const msActualDate = Date.now();
            const msAge = msActualDate - bNewFormat;
            const dayAge = msAge/86400000;
            if(msAge > 0){
                const mercuryAge = (dayAge / 88).toFixed(1);
                const venusAge = (dayAge / 225).toFixed(1);
                const earthAge = (dayAge / 365).toFixed(1);
                const marsAge = (dayAge / 687).toFixed(1);
                const jupiterAge = (dayAge / 4333).toFixed(2);
                const saturnAge = (dayAge / 10759).toFixed(2);
                const uranusAge = (dayAge / 30685).toFixed(2);
                const neptuneAge = (dayAge / 60266).toFixed(2);
                const solarSys = [
                    ['mercury', 'Mercure'],
                    ['venus' , 'Venus'],
                    ['earth' , 'Terre'],
                    ['mars' , 'Mars'],
                    ['jupiter' , 'Jupiter'],
                    ['saturn' , 'Saturne'],
                    ['uranus' , 'Uranus'],
                    ['neptune' , 'Neptune']
                ];
                $('#test').remove();
                $('body').append(`<div id="test"></div>`);
                solarSys.forEach((solarSysArray,index) =>{

                    $('#test').append(`
                    ${index % 4 == 0? '<div class="row">' : ''}
                    <div class="card col s12 m6 l3">
                        <div class="card-image waves-effect waves-block waves-light">
                            <img class="activator" src="assets/images/${solarSysArray[0]}_full.jpg">
                        </div>
                        <div class="card-content">
                            <span class="card-title activator grey-text text-darken-4">${solarSysArray[1]}<i class="material-icons right">more_vert</i></span>
                            <p>Votre âge sur ${solarSysArray[1]} est de ${eval(solarSysArray[0]+'Age')} an${eval(solarSysArray[0]+'Age') > 1? 's' : ''}.</p>
                        </div>
                        <div class="card-reveal">
                            <span class="card-title grey-text text-darken-4"><i class="material-icons right">close</i>${solarSysArray[1]}</span>
                            <p>Here is some more information about this product that is only revealed once clicked on.</p>
                        </div>
                    </div>
                    ${(index+1) % 4 == 0? '</div>' : ''}`
                    );
                    console.log(index % 4 == 0? 'row': 'pas row');
                    console.log((index+1) % 4 == 0 ? 'fin row' : 'no fin row');
                });

            }else{
                alert(`La date doit être antérieur à aujourd'hui`);
            }
        }else{
            alert('ALERTE GENERALE');
        }

    });

    $('.datepicker').on('mousedown',function(event){
        event.preventDefault();
    })

    $('.datepicker').pickadate({
        selectMonths: true, // Creates a dropdown to control month
        selectYears: 80, 
        closeOnSelect: false, // Close upon selecting a date,
        container: undefined, // ex. 'body' will append picker to body
        labelMonthNext: 'Mois suivant',
        labelMonthPrev: 'Mois précédent',
        labelMonthSelect: 'Selectionner le mois',
        labelYearSelect: 'Selectionner une année',
        monthsFull: [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ],
        monthsShort: [ 'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Jun', 'Jul', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec' ],
        weekdaysFull: [ 'Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi' ],
        weekdaysShort: [ 'Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam' ],
        weekdaysLetter: [ 'D', 'S', 'T', 'Q', 'Q', 'S', 'S' ],
        today: 'Aujourd\'hui',
        clear: 'Réinitialiser',
        close: 'Fermer',
        format: 'dd/mm/yyyy'
    });
});