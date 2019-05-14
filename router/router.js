"use strict"
const url = require("url");
const pag1 = require("../controllers/pag1");
const router = (req, res) => {
	console.log(req.url);
	let respuesta = "";
	if(req.method === "GET") {
		respuesta = procesaGet(req);
		req.statusCode =200;
	} else {
		req.statusCode =404;
	}
		res.end(JSON.stringify(respuesta));

	}
 
function procesaGet(peticion) {
	console.log(peticion.url);

	let enURL = url.parse(peticion.url, true);

	if(enURL.query.agreg === "alta") {
		let registronuevo = {
			alumno: enURL.query.a,
			edad_alumno: enURL.query.ea,
			genero_alumno: enURL.query.ga 
		}
		modelo.push(registronuevo);
	}
}

module.exports = router;