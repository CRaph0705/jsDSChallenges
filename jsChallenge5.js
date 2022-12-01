//Mitch veut créer un programme simple qui calcule le pourboire au resto. 
//Dans son pays, généralement, c’est 15% de la facture totale lorsque celle-ci est entre 50 et 300. 
//Si la valeur est différente, le pourboire est de 20%.

// Calculer le pourboire en fonction du montant de la facture. Bonus : utilisez un ternaire au lieu de if / else.
// Écrire dans la console une phrase contenant toutes les informations :
// “La note était de 275, le pourboire de 41,25 et la valeur totale était de 316,25”.

// Valeur de la note : 275, 40 et 430



let note;
let tips;
let total;

// note = 275;
// note = 40;
note = 430;


(note>=50 && note<=300) ? tips= note*15/100 : tips = note*20/100;
total = note + tips;

console.log(total);

console.log("La note était de "+ note + ", le pourboire de "+ tips +" et la valeur totale était de "+ total +".")