// 1) Calcul de la moyenne
// 2) Comparer + gagnant
// 3) moyenne >= 100 pour gagner
// Données Test : 
// Score Dauphins : 96, 108, 89 / Score Koalas : 88, 91, 110
// Score Dauphins : 97, 112, 101 / Score Koalas : 109, 95, 123
// Score Dauphins :97, 112, 101 / Score Koalas : 109, 95, 106


let dolphinScore = [];
let koalaScore = [];

// dolphinScore = [96, 108, 89];
// koalaScore = [88, 91, 110];
// dolphinScore = [97, 112, 101];
// koalaScore = [109, 95, 123];
// dolphinScore = [97, 112, 101];
// koalaScore = [109, 95, 106];

let average;

function averageCalculator(scoreArray) {
    average = (scoreArray[0] + scoreArray[1] + scoreArray[2]) / 3;
    return average;
    // console.log(average)
}

// averageCalculator(dolphinScore);
// averageCalculator(koalaScore);

function whoWins(dolphinArray, koalaArray) {
    dolphinAverage = averageCalculator(dolphinArray);
    koalaAverage = averageCalculator(koalaArray);
    console.log("dauphins : " +dolphinAverage);
    console.log("koalas : " + koalaAverage);
    if (dolphinAverage < 100 && koalaAverage < 100) {
        message = "pas de gagnant pour cette fois, il faut une moyenne d'au moins 100 pour gagner.";
    } else {

        if (dolphinAverage == koalaAverage) {
            message = "égalité, pas de gagnant.";
        } else if (dolphinAverage > koalaAverage) {
            message = "les dauphins ont été meilleurs";
        } else {
            message = "les koalas ont été meilleurs";
        }
    }
    console.log(message);
}


whoWins(dolphinScore, koalaScore);