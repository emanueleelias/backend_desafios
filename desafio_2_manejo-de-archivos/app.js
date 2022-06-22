import fs from 'fs';

class Contenedor {
    constructor(name) {
        this.fileName = name;
        this.countID = 0;
        this.content = [];
    }

    //Método que escribe/sobreescribe: de este manera queda más limpio el código de los otros métodos
    async write() { 
        await fs.promises.writeFile(this.fileName, JSON.stringify(this.content));
    }

    save(object) {
        this.countID++;
        object["id"] = this.countID;
        this.content.push(object);
        this.write(); 
        return `El id del objeto añadido es ${this.countID}`;
    }

    getAll() {
        return this.content;
    }

    getById(id) { 
        let result;
        if (this.content !== []) {
            let array = this.content;
            result = array.find(x => x.id === id)
            if (result === undefined) {
                result = null;
            }
        } else {
            result = 'El archivo está vacío';
        }
        return result;
    }

    deleteById(id) { 
        let result;
        if (this.content !== []) {
            let newContent = this.content.filter(item => item.id !== id);
            this.content = newContent;
            this.write();
            result = 'El  elemento se elimino correctamente';
        } else {
            result = `El archivo está vacío`;
        }
        return result;
    }

    async deleteAll() { 
        this.content = [];
        this.write();
    }
}

//--------------------------------PRUEBAS DE LA CLASE --------------------------------------------

const productosArchivo = new Contenedor("productos.txt");

//Usando el metodo save
productosArchivo.save({title: "Primer producto", price: 300, thumbnail: "URL Foto Producto 1"});
productosArchivo.save({title: "Segundo producto", price: 600, thumbnail: "URL Foto Producto 2"});
productosArchivo.save({title: "Tercer producto", price: 350, thumbnail: "URL Foto Producto 3"});
productosArchivo.save({title: "Cuarto producto", price: 500, thumbnail: "URL Foto Producto 4"});
productosArchivo.save({title: "Quinto producto", price: 500, thumbnail: "URL Foto Producto 5"});

//Usando el metodo getAll
console.log("--------------------GET ALL-------------------------------")
console.log(productosArchivo.getAll());
console.log("--------------------FIN GET ALL-------------------------------")

//usando el metodo getById(id)
console.log("--------------------GET BY ID-------------------------------")
console.log(productosArchivo.getById(2));
console.log("--------------------FIN GET BY ID-------------------------------")

//usando el metodo deleteById(id) 
console.log("--------------------DELETE BY ID-------------------------------")
console.log(productosArchivo.deleteById(1));
console.log(productosArchivo.getAll());
console.log("--------------------FIN DELETE BY ID-------------------------------")

//usando el metodo deleteAll()
console.log("--------------------DELETE ALL------------------------------")
productosArchivo.deleteAll();
console.log(productosArchivo.getAll());
console.log("--------------------FIN DELETE ALL------------------------------")