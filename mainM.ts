// importo la clase Movie
import {Movie} from "./movie"
import { Imdb } from "./imdb"

const fs = require('fs')
let seven:Movie= new Movie("Seven", 1995, "EE.UU", "Crime")
let lamb: Movie = new Movie("EL silencio de los corderos", 1991, "EE.UU", "Thriler")
let matilda:Movie= new Movie("Matilda", 1998, "EE.UU", "Infantil")

seven.releaseYear = 2008;

let pelis: Movie[] = new Array(seven, lamb)

let pelis2: Imdb = new Imdb(pelis)


pelis2.escribirEnFicheroJSON("imdbBBDD.json");
let objetoIMDB: Imdb = pelis2.obtenerInstanciaIMDB("BBDDpeliculas.json")

fs.appendFileSync("imdbBBDD.json", matilda.printPeliculas())

// (pelis2.peliculas[0].printPeliculas())
