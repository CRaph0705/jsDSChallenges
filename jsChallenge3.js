//Ex1
// – Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.
// – Données 2 : Bernard pèse 95kg et mesure 1,88m. Marcel pèse 85kg et mesure 1,76m.
// Créer un booléen ‘bernardHigherIMC’ disant si oui ou non Bernard a un IMC plus grand que celui de Marcel.

let bernard = [78, 1.69];
let marcel = [92, 1.95];
let bernard2 = [95, 1.88];
let marcel2 = [85, 1.76];

function imcCalculator(currentPerson) {
    currentIMC = currentPerson[0] / (currentPerson[1] * currentPerson[1]);
    return currentIMC;
}
let bernardImc = imcCalculator(bernard2);
let marcelImc = imcCalculator(marcel2);

let bernardHigherIMC;

if (marcelImc < bernardImc) {
    bernardHigherIMC = true;
} else {
    bernardHigherIMC = false;
}
if (bernardHigherIMC) {
    joliTexte = "Bernard a un IMC " + bernardImc + " plus élevé que Marcel " + marcelImc;
} else {
    joliTexte = "Marcel a un IMC " + marcelImc + " plus élevé que Bernard " + bernardImc;
}
// console.log(joliTexte);


// Ex 2
//Affiche un joli texte dans la console écrivant qui a l’IMC le plus élevé. Le message est :
// “Bernard a un IMC plus élevé que Marcel” OU “Marcel a un IMC plus élevé que Mark”
// Affiche l’IMC dans le texte de sortie :
// “Bernard a un IMC (28,3) plus élevé que Marcel (22)”


// postulat : âge entre 35 et 44.

// console.log(bernardImc);
let infoIMC;
// function imcComparator(currentIMC) {
//     switch (currentIMC) {
//         case currentIMC < 22:
//             infoIMC = "Insuffisance pondérale";
//             break;
//         case currentIMC <= 27:
//             infoIMC = "Poids normal";
//             console.log('ici')
//             break;
//         case currentIMC <= 32:
//             infoIMC = "Surpoids";
//             break;
//         case currentIMC <= 42:
//             infoIMC = "Obésité";
//             break;
//         case currentIMC > 42:
//             infoIMC = "Obésité importante";
//             break;
//         default:
//             infoIMC = "saison de la raclette, RIP ton imc anyway";
//             break;
//     }
//     return infoIMC;
// }


function imcComparator(currentIMC) {
    if (currentIMC < 22) {
        infoIMC = "Insuffisance pondérale";
    } else if (currentIMC <= 27) {
        infoIMC = "Poids normal";
    } else if (currentIMC <= 32) {
        infoIMC = "Surpoids";
    } else if (currentIMC <= 42) {
        infoIMC = "Obésité";
    } else if (currentIMC > 42) {
        infoIMC = "Obésité importante";
    } else {
        infoIMC = "saison de la raclette, RIP ton imc anyway";
    }
    return infoIMC;
}


console.log(imcComparator(bernardImc));


console.log(imcComparator(marcelImc));