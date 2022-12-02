//Bonus : Écrire une fonction ‘calcAverage’ qui prend un tableau comme argument
// et qui calcule la moyenne de tous les nombres du tableau. 
//Écrire dans la console la moyennes des totaux.


let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let totals = [];


function tipsCalc(array) {
    for (let i = 0; i < array.length; i++) {
        (bills[i] >= 50 && bills[i] <= 300) ? tip = bills[i] * 15 / 100 : tip = bills[i] * 20 / 100;
        tips.push(tip);
        total = bills[i] + tips[i];
        totals.push(total);
    }
}

let average;
function calcAverage(array){
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    average = sum/array.length;
    return average;
}

tipsCalc(bills);

calcAverage(totals);



console.log("bills : "+bills);

console.log("tips : "+tips);

console.log("totals : "+totals);

console.log("average : "+average);




