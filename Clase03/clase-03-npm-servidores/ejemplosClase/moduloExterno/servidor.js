/* const moment = require('moment')

const hoy = moment()
const nacimiento = moment("03/04/1984", "DD/MM/YYYY")

const difYear = hoy.diff(nacimiento, 'years');
const difDays = hoy.diff(nacimiento, 'days');

console.log(`Hoy es ${hoy.format("DD/MM/YYYY")}`)
console.log(`Nací el ${nacimiento.format("DD/MM/YYYY")}`)
console.log(`Desde mi nacimiento han pasado ${difYear} años.`)
console.log(`Desde mi nacimiento han pasado ${difDays} días.`) */

/* console.log('hola!'); */

const http = require('http')

const servidor = http.createServer((peticion, respuesta) => {
    respuesta.end('Sin problemas... enlace exitoso')
})

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {
        const servidorConectado = servidor.listen(puerto, err => {
            if (err) reject(err)
            else resolve(servidorConectado)
        })
    })
}

module.exports = { conectar }

