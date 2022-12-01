let dolphinScore = [];
let koalaScore = [];

dolphinScore = [44, 23, 71];
koalaScore = [65, 54, 49];




let average;

function calcAverage(scoreArray) {
    average = (scoreArray[0] + scoreArray[1] + scoreArray[2]) / 3;
    return average;
}

calcAverage("moyenne des dauphins : " + dolphinScore);
calcAverage("moyenne des koalas : " + koalaScore);



function checkWinner(dolphinArray, koalaArray) {
    dolphinAverage = calcAverage(dolphinArray);
    koalaAverage = calcAverage(koalaArray);
    console.log("dauphins : " + dolphinAverage);
    console.log("koalas : " + koalaAverage);


    if (dolphinAverage >= 2 * koalaAverage) {
        message = "L’équipe Dauphin gagne (" + dolphinAverage + " vs " + koalaAverage + ")";
    } else if (koalaAverage >= 2 * dolphinAverage) {
        message = "L’équipe Koala gagne (" + koalaAverage + " vs " + dolphinAverage + ")";
    } else {
        message = "pas de gagnant pour cette fois.";
    }
    console.log(message);

}


checkWinner(dolphinScore, koalaScore);




dolphinScore = [85, 54, 41];
koalaScore = [23, 34, 27];


checkWinner(dolphinScore, koalaScore);
