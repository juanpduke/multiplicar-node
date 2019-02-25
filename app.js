const argv=require('./config/yargs').argv;
const colors=require('colors');
const { crearArchivo, listarTabla }=require('./multiplicar/multiplicar');

let comando=argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base,argv.limite);
            //.then(tabla => console.log(`tabla del ${argv.base}:\n${tabla}`))
            //.catch(e => console.log(e));
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo Creado: ${archivo.blue}`))
            //.then(archivo => console.log(`Archivo Creado: ${colors.red(archivo)}`))
            //.then(archivo => console.log('Archivo Creado: ' + `${archivo}`.green))
            .catch(e => console.log(e));
        break;
    default:
        console.log('comando no reconocido');
        break;
}
//console.log(argv);