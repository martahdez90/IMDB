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
    crearJson() {
        let result = ""
        for (let i = 0; i < this.peliculas.length; i++) {
            result += this.peliculas[i].printPeliculas() + "\n";
        }
        return fs.writeFileSync("imdbBBDD.json", result);
    }
    readJson() {
        let salida: string = fs.readFileSync("imdbBBDD.json")
        return salida.toString();
    }
    escribirEnFicheroJSON(nombreFichero: string) {
        return fs.copyFileSync(nombreFichero, "BBDDpeliculas.json");
    }
    obtenerInstanciaIMDB(nombreFichero: string): Imdb {
        let lectura: Imdb = fs.readFileSync(nombreFichero).toString()
        return lectura;
    }
}

