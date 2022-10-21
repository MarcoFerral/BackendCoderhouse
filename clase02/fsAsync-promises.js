const fs = require ('fs')


const promesadeContenido = fs.promises.readFile('./clase02/fsSync.js', 'utf-8')
promesadeContenido
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error))


const promesaDeEscritura = fs.promises.writeFile('./clase02/prueba.txt', 'probando 1,2,3...')
promesaDeEscritura
.then(() => {console.log('terminó proceso de escritura')})
.catch(error => {console.log(error)})

console.log('todas las operaciones han comenzado')