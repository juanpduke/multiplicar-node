const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime en consola la tabla', opts)
    .command('crear', 'crea un archivo con la tabla', opts)
    .help()
    .argv;

module.exports = {
    argv
}