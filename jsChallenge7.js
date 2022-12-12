// Mitch veut continuer son programme qui calcule le pourboire au resto. 
// Rappel : dans son pays, généralement, c’est 15% de la facture totale lorsque celle-ci est entre 50 et 300.
// Si la valeur est différente, le pourboire est de 20%.







let bills = [125, 555, 44];
let tips = [];
let totals = [];

console.log(totals);
function tipsCalc(bill){
    (bill>=50 && bill<=300) ? tip= bill*15/100 : tip = bill*20/100;
    return tip;
}




for(let i = 0; i < bills.length; i ++){
    tipsCalc(bills[i])
    tips.push(tip);
}
console.log(tips);


for(let i = 0; i < bills.length; i ++){
    total = bills[i] + tips[i]
    totals.push(total);
}

console.log(totals);