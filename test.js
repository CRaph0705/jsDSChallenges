let userCountry = prompt("Where are you from");

switch(userCountry){
    case "France":
        console.log("Bonjour");
        break;
    case "England":
        console.log("Hello");
        break;
    case "Germany":
        console.log("Hallo");
        // break;
    case "Italy":
        console.log("Ciao");
        // break;
    case "Spain":
        console.log("Hola");
        break;
    default:
        console.log("Hey there");
        break;
}