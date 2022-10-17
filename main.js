/* function probar(){

    
    let nombre = "Mario"
    let edad = 25
    let saludo = `hola, soy ${nombre}`
    
    console.log(nombre)
    console.log(edad)
    console.log(saludo);

    nombre = 'Yulia'

    console.log(nombre);

    
    const array = [
        'will',
        'Heather',
        'Hannah',
    ]
    console.log(array['0']);

    array.push('otto')

   console.log(array);
}

probar() */

class Persona {
    #nombre
    #colores

    constructor (nombre){
        this.#nombre = nombre
        this.#colores = []
    }

    obtenerNombre() {
        return this.#nombre
    }

    obtenerColores() {
        return this.#colores
    }

    agregarColor(color){
        this.#colores.push(color)
    }


}

const p1 = new Persona('Marco')
const p2 = new Persona ('Marybel')

p1.agregarColor('rojo')
p2.agregarColor('amarillo')

console.log(p1.obtenerNombre())
console.log(p1.obtenerColores())
console.log(p2.obtenerNombre())
console.log(p2.obtenerColores())