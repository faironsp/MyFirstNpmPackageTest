var myNodePackage = require('myfirstnpmpackagenode')

for (let index = 0; index <= 10; index++) {
    var respostaNumeroPar = false;
    respostaNumeroPar = myNodePackage.NumeroPar(index);
    console.log("Resultado: \"" + index + "\" é " + ((respostaNumeroPar == true) ? "par" : "impar"));
}