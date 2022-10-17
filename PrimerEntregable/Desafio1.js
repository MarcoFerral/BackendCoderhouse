class Usuario {
    #nombre
    #apellido
    #libros
    #mascotas

    constructor (nombre){
        this.#nombre = nombre
        this.#apellido = apellido
        this.#libros = []   
        this.mascotas = []
    }

    obtenerNombre() {
        return this.#nombre
    }

    obtenerApellido(){
        return this.#apellido
    }

    obtenerLibros() {
        return this.#libros
    }

    agregarLibro(libro){
        this.#libros.push(libro)
    }

    agregarMascota(mascota){
        this.#mascotas.push(mascota)
    }
}

const U1 = new Usuario('Dan')
const U2 = new Usuario('Fab')

U1.agregarLibro([nombre: 'Momo', autor: 'Michael Ende'])
U1.agregarMascota(['cacatúa', 'mono', 'loro'])

console.log(U1.obtenerNombre());
console.log(U1.obtenerApellido());
console.log(U1.obtenerLibros());
console.log(U2.obtenerNombre());
console.log(U2.obtenerApellido());
console.log(U2.obtenerLibros());