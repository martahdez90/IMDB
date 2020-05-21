/* •	Crear una clase denominada Imdb cuyo constructor reciba un array de objetos de la clase Movie 
•	Con un único atributo publico denominado películas que es un array de objetos de la clase Movie */
// importo la clase Movie
import { Movie } from "./movie"

const fs = require('fs')
export class Imdb {
    public peliculas: Movie[]
    //creo el constructor
    constructor(arrayMovie: Movie[]) {
        this.peliculas = arrayMovie
    }
    escribirEnFicheroJSON(nombreFichero: string) {
        let result = ""
        result = JSON.stringify(this.peliculas)
        return fs.writeFileSync(nombreFichero, result);
    }
    obtenerInstanciaIMDB(nombreFichero: string): Imdb {
        let lectura: object = fs.readFileSync(nombreFichero).toString()// que lo devolviera en string // convertirlo a objecto Imdb
        return lectura;
    }
}

