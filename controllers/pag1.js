const modelp1 = require("../models/modelpag1");
const pag1 = (req) => {
	return modelp1();
};





//function numeros(){
  //  for(let i=0, max=10; i<max; i++){
    //    console.log("Numero " + (i+1));
    //}
//}
//numeros();

module.exports = pag1;