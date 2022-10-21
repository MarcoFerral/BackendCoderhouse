const fs = require ('fs')
const contenido = fs.readFileSync('./clase02/fsSync.js', 'utf-8')
console.log(contenido)

/* fs.writeFileSync('./clase02/prueba.txt', 'probando 1,2,3...') */
/* fs.writeFileSync('./clase02/prueba2.txt', 'oootra prueba')
 */
fs.rmSync('./prueba2.txt')