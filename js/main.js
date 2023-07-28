// esercizio 1(mail)
const autorizzati= [ "pippo", "pluto", "topolino"];
const email= prompt("inserisci la tuea email:")
for(let i=0;i<autorizzati.length; i++){
    if(email==autorizzati[i]){
        alert("sei autorizato")
    }
}
// esercizio 2(dadi)
const giocatore1= Math.round(Math.random()*5)+1;
console.log('giocatore1: ' + giocatore1)
const giocatore2= Math.round(Math.random()*5)+1;
console.log('giocatore2: ' + giocatore2)
if(giocatore1>giocatore2){
    console.log('HAI VINTO GIOCATORE 1')
}
else if(giocatore2>giocatore1){
    console.log('HAI VINTO GIOCATORE 2')
}
else{
    console.log('NON RIESCO A TROVARE UN VINCITORE')
}
