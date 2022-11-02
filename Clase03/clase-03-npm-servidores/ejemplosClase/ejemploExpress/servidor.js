const express = require('express')

const servidor = express()

servidor.get('/bienvenida', (peticion, respuesta) => {
    respuesta.send('Hola! Bienvenido de vuelta')
})   

servidor.get('/despedida', (peticion, respuesta) => {
    respuesta.send('Nos vemos pronto')
})   

servidor.get('/producto', (peticion, respuesta) => {
    respuesta.send('Aqui vas a encontrar los mejores productos del mercado!!!')
})   

function conectar(puerto = 0) {
    return new Promise((resolve, reject) => {
        const servidorConectado = servidor.listen(puerto, () => {
            resolve(servidorConectado)
        })
        servidorConectado.on("error", error => reject(error))
    })
}

module.exports = { conectar }
            

