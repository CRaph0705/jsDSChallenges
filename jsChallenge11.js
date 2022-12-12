//Données 1 : Bernard pèse 78kg et mesure 1,69m. Marcel pèse 92kg et mesure 1,95m.
//Données 2 : Bernard pèse 95kg et mesure 1,88m. Marcel pèse 85kg et mesure 1,76m.

function imcCalculator(currentPerson) {
    currentIMC = currentPerson[weight] / (currentPerson[height] ** 2);
    return currentIMC;
}





function calcBMI() {
    console.log(this)
    this.imc = this.weight / (this.height ** 2);
    console.log("IMC de Bernard : " + this.imc);
    return this.imc;
}

calcBMI();

const bernard = {
    firstname: "Bernard",
    weight: 78,
    height: 1.69,
    imc: 0,
    calcBMI: calcBMI
}
const marcel = {
    firstname: "Marcel",
    weight: 92,
    height: 1.95,
    imc: 0,
    calcBMI: calcBMI
}

function whoIsTheFattest(person1, person2) {
    person1.calcBMI();
    person2.calcBMI();

    if (person1.imc === person2.imc) {
        console.log("Ils sont tout aussi gros");
        return;
    }

    const fattestPerson = person1.imc > person2.imc ? person1 : person2;
    const fittestPerson = person1.imc < person2.imc ? person1 : person2;

    console.log(`${fattestPerson.firstname} est celui qui mange le plus à la cantoche 
    (encore plus que ${fittestPerson.firstname}) ! Il s'impose avec un imc de ${fattestPerson.imc}`);

    /*     if (person1.imc > person2.imc){
            return person1;
        //console.log(`${object1.firstname} est celui qui mange le plus à la cantoche ! Il s'impose avec un imc de ${object1.imc}`)
        }
        return person2; */

}
whoIsTheFattest(bernard, marcel);

// const Marcel = {}

// const persons = [
//     {firstname: "Bernard", weight: 78, height: 1.69}, 
//     {firstname: "Marcel", weight: 92, height: 1.95}
// ]

// const persons = [
//     {firstname: "Bernard", weight: 95, height: 1.88}, 
//     {firstname: "Marcel", weight: 85, height: 1.76} 
// ]