
//Clase usuario...
class Usuario {

    constructor (nombre, apellido, libros, mascotas) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.libros = libros;
        this.mascotas = mascotas;
    }

    getFullName() {
        console.log(`Nombre completo: ${this.nombre}, ${this.apellido}`);
    }

    addMascota(mascota) {
        this.mascotas = [...this.mascotas, mascota];
    }

    countMascotas() {
        console.log(`Se cargaron ${this.mascotas.length} mascotas.`);
    }

    addBook(book, autor) {
        this.libros = [...this.libros, {nombre: book, autor: autor}]
    }

    getBookNames() {
        this.libros.map((element, i) => {console.log(`Libro ${i+1}: ${element.nombre}.`)});
    }

}

//Instancia de la clase Usuario en usuario1
const usuario1 = new Usuario("Elias Daniel", "Emanuele", [{nombre:"100 años de Soledad", autor: "Gabriel García Márquez"}], ["Osi"]);
//Llamada a metodo para mostrar el nombre completo
console.log("----------------- Nombre completo -----------------");
usuario1.getFullName();
//Agregando varias mascotas
usuario1.addMascota("Timón");
usuario1.addMascota("Chimuelo");
usuario1.addMascota("Firulais");
usuario1.addMascota("Umi");
//Mostrando cantidad de mascotas cargadas en el atributo mascotas
console.log("----------------- Cantidad de mascotas -----------------");
usuario1.countMascotas();
//Agregando libros
usuario1.addBook("Luces de bohemia", " Ramón del Valle-Inclán");
usuario1.addBook("Crimen y castigo", "Fedor Dostoievski");
//Mostrando nombre de los libros cargados en el objeto usuario1
console.log("----------------- Libros guardados -----------------");
usuario1.getBookNames();