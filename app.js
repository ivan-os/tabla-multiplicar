const { crearArchivo } = require('./helpers/multiplicar');
const colors = require('colors');
const argv  = require('./config/yargs');


console.clear();

//console.log(process.argv);
//const [,,arg3] = process.argv;
//const [,base = 5] = arg3.split('=')

//console.log(argv);
//console.log(argv.l);

//const base = 3;


crearArchivo(argv.base, argv.listar, argv.hasta)
    .then(msg => console.log(msg,'creado'))
    .catch(err => console.log(err))