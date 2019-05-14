'use strict'
const http= require ('http');
const puerto= 3000;
const router= require ('./router/router');
const modelpag1 = require ("./models/modelpag1");

http.createServer(router).listen(puerto);