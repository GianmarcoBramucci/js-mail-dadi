//? variabili generali
let btnSubmitStartMail = document.getElementById('btn-submit37');
let btnSubmitStartDadi = document.getElementById('btn-submit73');
let btnRest = document.getElementById('btn-rest73');
let divAnswer = document.getElementById('answer73');
//? variabili controllo email
let inputEmail = document.getElementById('email37');
let btnSubmitMail = document.getElementById('btn-submit733');
let emailGroup =  document.getElementById('email-group');
let answerEmail = document.getElementById('answer-email73')
let guestList=['luca','paolo','mairio','pippo'];
//* reset di cio che vediamo al caricamento 
emailGroup.classList.add('d-none');
divAnswer.innerHTML = '';
//! funzioni controllo email
//* fa apparire gli input e la risposta
btnSubmitStartMail.addEventListener('click', function(){
    emailGroup.classList.remove('d-none');
    divAnswer.innerHTML = '';
    inputEmail.value = '';
});
//* fa il vero controllo al clik del bottone
btnSubmitMail.addEventListener('click', function(){
let userEmail = inputEmail.value;
let listLength = guestList.length;
divAnswer.innerHTML = '';
let flag = false;
 
if(isNaN(userEmail)){
    for(let i = 0; i<listLength; i++){
        if(userEmail == guestList[i]){
            flag = true;        
        }
    }
    if(flag){
        answerEmail.innerHTML = 'sei invitato';
    }
    
    else{
        answerEmail.innerHTML = 'non sei invitato';
    }        
}
else{
    answerEmail.innerHTML = 'qualcosa e andato storto';
}
});

//! funzioni gioco dadi
btnSubmitStartDadi.addEventListener('click',function(){
emailGroup.classList.add('d-none');
let max = 6;
let min = 1;
let userNumber= getRndInteger(min, max);
let pcNumber = getRndInteger(min, max);
let message = `il tuo numero:${userNumber}  il tuo avversario:${pcNumber}`;
if(userNumber > pcNumber){
    message = `${message} RISULTATO: HAI VINTO`
}
else if(userNumber===pcNumber){
    message = `${message} RISULTATO: PARITA`
}
else{
    message = `${message} RISULTATO: HAI PERSO`
}
divAnswer.innerHTML = message;
});

//* funzione bottone reset
btnRest.addEventListener('click',function(){
    emailGroup.classList.add('d-none');
    divAnswer.innerHTML = '';
});
