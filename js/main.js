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

emailGroup.classList.add('d-none');
btnSubmitStartMail.addEventListener('click', function(){
    emailGroup.classList.remove('d-none');
});
btnSubmitMail.addEventListener('click', function(){
let userEmail = inputEmail.value;
let listLength = guestList.length;
if(isNaN(userEmail)){
    for(let i = 0; i<listLength; i++){
        if(userEmail == guestList[i]){
            answerEmail.innerHTML = 'sei invitato';
        }
        else{
            answerEmail.innerHTML = 'non sei invitato';
        }        
    }
} 
});



